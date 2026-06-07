"use server";

import { db } from "@/lib/db";
import { dynamicPages } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// Mengambil semua halaman dinamis
export async function getPages() {
  try {
    const pages = await db.query.dynamicPages.findMany({
      orderBy: (dynamicPages, { desc }) => [desc(dynamicPages.createdAt)],
    });
    return { success: true, data: pages };
  } catch (error) {
    console.error("Failed to fetch pages:", error);
    return { success: false, error: "Gagal mengambil data halaman" };
  }
}

// Mengambil satu halaman berdasarkan slug
export async function getPageBySlug(slug: string) {
  try {
    const page = await db.query.dynamicPages.findFirst({
      where: eq(dynamicPages.slug, slug),
    });
    return { success: true, data: page };
  } catch (error) {
    console.error("Failed to fetch page:", error);
    return { success: false, error: "Gagal mengambil halaman" };
  }
}

// Menyimpan atau memperbarui halaman
export async function savePage(data: { title: string; slug: string; category?: string; content?: string }) {
  try {
    const existing = await db.query.dynamicPages.findFirst({
      where: eq(dynamicPages.slug, data.slug),
    });

    if (existing) {
      // Update existing page
      await db.update(dynamicPages)
        .set({
          title: data.title,
          category: data.category,
          content: data.content,
        })
        .where(eq(dynamicPages.slug, data.slug));
    } else {
      // Create new page
      await db.insert(dynamicPages).values({
        title: data.title,
        slug: data.slug,
        category: data.category,
        content: data.content,
        isPublished: true, // Auto publish for now
      });
    }

    revalidatePath("/admin/pages");
    revalidatePath(`/p/${data.slug}`);
    
    return { success: true, message: "Halaman berhasil disimpan!" };
  } catch (error) {
    console.error("Failed to save page:", error);
    return { success: false, error: "Gagal menyimpan halaman" };
  }
}

// Menghapus halaman
export async function deletePage(slug: string) {
  try {
    await db.delete(dynamicPages).where(eq(dynamicPages.slug, slug));
    
    revalidatePath("/admin/pages");
    revalidatePath(`/p/${slug}`);
    
    return { success: true, message: "Halaman berhasil dihapus!" };
  } catch (error) {
    console.error("Failed to delete page:", error);
    return { success: false, error: "Gagal menghapus halaman" };
  }
}

import { db } from "@/lib/db";
import { dynamicPages } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import { PagesClient } from "./PagesClient";

export const dynamic = "force-dynamic";

export default async function AdminPagesCMS() {
  const pages = await db.query.dynamicPages.findMany({
    orderBy: [desc(dynamicPages.createdAt)],
  });

  return <PagesClient initialPages={pages} />;
}

import paramiko
import sys

def main():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect('103.27.206.181', username='root', password='Kekorea&epstopik2026', port=22)
    except Exception as e:
        print(f"Connection failed: {e}")
        sys.exit(1)

    env_content = """DATABASE_URL="postgresql://neondb_owner:npg_iQ1hp2HCENmg@ep-nameless-bonus-aqn1vfm2-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require"
JWT_SECRET="epstopik-super-secret-key-neon-2026"
"""
    
    sftp = client.open_sftp()
    
    # Write to monorepo root
    try:
        with sftp.file('/var/www/kekorea.id/.env', 'w') as f:
            f.write(env_content)
    except: pass
    
    # Write to apps/web just in case
    try:
        with sftp.file('/var/www/kekorea.id/apps/web/.env', 'w') as f:
            f.write(env_content)
    except: pass

    # Write to packages/database if it exists
    try:
        with sftp.file('/var/www/kekorea.id/packages/database/.env', 'w') as f:
            f.write(env_content)
    except: pass
    
    sftp.close()

    print("=== RESTARTING PM2 ===")
    stdin, stdout, stderr = client.exec_command('pm2 restart kekorea.id')
    print(stdout.read().decode('utf-8', errors='ignore'))
    print(stderr.read().decode('utf-8', errors='ignore'))
    
    client.close()

if __name__ == "__main__":
    main()

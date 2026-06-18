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

    nginx_conf = """
server {
    listen 80;
    server_name kekorea.id www.kekorea.id;

    location / {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        
        # Increase proxy buffers to handle large Next.js headers
        proxy_buffer_size 128k;
        proxy_buffers 4 256k;
        proxy_busy_buffers_size 256k;
    }
}
"""
    # Write to temp file on remote, then move
    sftp = client.open_sftp()
    with sftp.file('/etc/nginx/sites-available/kekorea.id', 'w') as f:
        f.write(nginx_conf)
    sftp.close()

    print("=== RESTARTING NGINX ===")
    stdin, stdout, stderr = client.exec_command('systemctl restart nginx')
    print(stdout.read().decode('utf-8', errors='ignore'))
    print(stderr.read().decode('utf-8', errors='ignore'))
    
    client.close()

if __name__ == "__main__":
    main()

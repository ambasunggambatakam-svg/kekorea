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

    print("=== NGINX CONF ===")
    stdin, stdout, stderr = client.exec_command('cat /etc/nginx/sites-enabled/kekorea.id')
    conf = stdout.read().decode('utf-8', errors='ignore')
    if not conf:
        stdin, stdout, stderr = client.exec_command('cat /etc/nginx/sites-enabled/default')
        conf = stdout.read().decode('utf-8', errors='ignore')
        
    import codecs
    with codecs.open('nginx_conf.txt', 'w', encoding='utf-8') as f:
        f.write(conf)
        
    client.close()

if __name__ == "__main__":
    main()

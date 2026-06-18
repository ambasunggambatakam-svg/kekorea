import paramiko
import sys
import codecs

def main():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect('103.27.206.181', username='root', password='Kekorea&epstopik2026', port=22)
    except Exception as e:
        print(f"Connection failed: {e}")
        sys.exit(1)

    stdin, stdout, stderr = client.exec_command('pm2 logs kekorea.id --nostream --lines 100')
    logs = stdout.read().decode('utf-8', errors='ignore')
    
    with codecs.open('pm2_logs.txt', 'w', encoding='utf-8') as f:
        f.write(logs)

    stdin, stdout, stderr = client.exec_command('curl -I http://127.0.0.1:3002/')
    curl_out = stdout.read().decode('utf-8', errors='ignore')
    with codecs.open('curl_out.txt', 'w', encoding='utf-8') as f:
        f.write(curl_out)
        
    client.close()

if __name__ == "__main__":
    main()

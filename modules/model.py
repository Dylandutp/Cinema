from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from string import Template
from pathlib import Path
import smtplib

def send_eamil(subject, receiver, mailtype='',message='None', message_path='', **kwargs):
    content = MIMEMultipart()  # 建立MIMEMultipart物件
    content["subject"] = subject  # 郵件標題
    content["from"] = "dugoogoo@gmail.com"  # 寄件者
    content["to"] = receiver  # 收件者
    if message_path != '':
        template = Template(Path(message_path).read_text())
        msg = template.substitute(kwargs)
    else:
        msg = message
        

    if mailtype != '':
        content.attach(MIMEText(msg, mailtype))
    else:
        content.attach(MIMEText(msg))
    
    with smtplib.SMTP(host="smtp.gmail.com", port="587") as smtp:
        try:
            smtp.ehlo()
            smtp.starttls()
            smtp.login("dugoogoo@gmail.com", "jjfhlcqtpknvrhud")
            smtp.send_message(content)
            print("Complete!")
        except Exception as e:
            print("Error message: ", e)

# send_eamil('test', 'dylandutp@gmail.com', message='test')
# send_eamil("Reset Password", 'dylandutp@gmail.com', 'html', message_path='Cinema/templates/password_reset_email', user='user', token='aaa')


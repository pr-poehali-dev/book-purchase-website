import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку на покупку книги на почту автора"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    address = body.get('address', '').strip()

    if not name or not contact:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': '\u0418\u043c\u044f \u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b'},
                               ensure_ascii=False)
        }

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    from_email = 'sofiafadeeva031@gmail.com'
    to_email = 'sofiafadeeva031@gmail.com'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'📚 Новый заказ — Лисья Невеста от {name}'
    msg['From'] = from_email
    msg['To'] = to_email

    html = f"""
    <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; background: #1a1208; color: #f0e8d0; padding: 32px; border-radius: 4px; border: 1px solid #3a2a10;">
      <h2 style="color: #e07830; font-weight: 300; font-size: 28px; margin: 0 0 8px;">Новый заказ</h2>
      <p style="color: #a09070; font-size: 13px; margin: 0 0 28px; font-style: italic;">Лисья Невеста · Софи Клэр</p>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #3a2a10; color: #a09070; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; width: 120px;">Имя</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #3a2a10; font-size: 15px;">{name}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #3a2a10; color: #a09070; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Контакт</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #3a2a10; font-size: 15px;">{contact}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #3a2a10; color: #a09070; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Адрес</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #3a2a10; font-size: 15px;">{address or 'не указан'}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; color: #a09070; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Сумма</td>
          <td style="padding: 12px 0; font-size: 22px; color: #e07830; font-weight: 300;">850 ₽</td>
        </tr>
      </table>

      <p style="margin: 28px 0 0; font-size: 12px; color: #705040; text-align: center;">
        Свяжитесь с покупателем для подтверждения заказа и оплаты
      </p>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
type EmailNotification = {
  type: 'email';
  sender: string;
  message: string;
};

type SMSNotification = {
  type: 'sms';
  number: string;
  message: string;
};

type PushNotification = {
  type: 'push';
  title: string;
  message: string;
};

export type Notification = EmailNotification | SMSNotification | PushNotification;

export function sendNotification(notification: Notification): string {
  if (isEmail(notification)) return `sender: ${notification.sender}\nmessage: ${notification.message}`;
  switch (notification.type) {
    case 'sms':
      return `number: ${notification.number}\nmessage: ${notification.message}`;
    case 'push':
      return `title: ${notification.title}\nmessage: ${notification.message}`;
    default:
      return 'Unknown notification type';
  }
}

export function isEmail(notification: Notification): notification is EmailNotification {
  return notification.type === 'email';
}

const notification: Notification = {
  type: 'email',
  sender: 'diogolp@gmail.com',
  message: 'Hello World!',
};

console.log(sendNotification(notification));

<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\Telegram\TelegramMessage;

class SendNotification extends Notification
{
    use Queueable;

    private array $content;


    /**
     * Create a new notification instance.
     */
    public function __construct(array $content)
    {
        $this->content = $content;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['telegram'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toTelegram(object $notifiable): MailMessage
    {
        $data = $this->content;
        return TelegramMessage::create()->to('-930943524')->content("Новая заявка. \n" . "Имя: " . $data['name'] . "\n" . "Тел. " . $data['tel'] . "\n" . "Email: " . $data['email'] . "\n" . "Задача: " . $data['task']);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}

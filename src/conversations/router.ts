'use strict';
import {Router} from 'express';

const router = Router();

router.get('/:conversationSid', (req, res) => {
    const conversationSid = req.params.conversationSid;
    const response = {
        'sid': conversationSid,
        'account_sid': 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'chat_service_sid': 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'messaging_service_sid': 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'friendly_name': 'Friendly Conversation',
        'unique_name': 'unique_name',
        'attributes': {
            'topic': 'feedback'
        },
        'date_created': '2015-12-16T22:18:37Z',
        'date_updated': '2015-12-16T22:18:38Z',
        'state': 'inactive',
        'timers': {
            'date_inactive': '2015-12-16T22:19:38Z',
            'date_closed': '2015-12-16T22:28:38Z'
        },
        'bindings': {},
        'url': 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'links': {
            'participants': 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Participants',
            'messages': 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages',
            'webhooks': 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Webhooks'
        }
    };
    res.json(response);
});

router.post('/', (req, res) => {
    const response = {
        'sid': 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'account_sid': 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'chat_service_sid': 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'messaging_service_sid': 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'friendly_name': 'Friendly Conversation',
        'unique_name': 'unique_name',
        'attributes': {
            'topic': 'feedback'
        },
        'date_created': '2015-12-16T22:18:37Z',
        'date_updated': '2015-12-16T22:18:38Z',
        'state': 'inactive',
        'timers': {
            'date_inactive': '2015-12-16T22:19:38Z',
            'date_closed': '2015-12-16T22:28:38Z'
        },
        'bindings': {},
        'url': 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'links': {
            'participants': 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Participants',
            'messages': 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages',
            'webhooks': 'https://conversations.twilio.com/v1/Conversations/CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Webhooks'
        }
    };
    res.json(response);
});


export default router;

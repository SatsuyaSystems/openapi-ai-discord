# OpenWebuiRoutersChannelsMessageUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**user_id** | **string** |  | [default to undefined]
**channel_id** | **string** |  | [optional] [default to undefined]
**reply_to_id** | **string** |  | [optional] [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]
**content** | **string** |  | [default to undefined]
**data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**meta** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**created_at** | **number** |  | [default to undefined]
**updated_at** | **number** |  | [default to undefined]
**user** | [**UserNameResponse**](UserNameResponse.md) |  | [optional] [default to undefined]
**reply_to_message** | [**OpenWebuiModelsMessagesMessageUserResponse**](OpenWebuiModelsMessagesMessageUserResponse.md) |  | [optional] [default to undefined]
**latest_reply_at** | **number** |  | [default to undefined]
**reply_count** | **number** |  | [default to undefined]
**reactions** | [**Array&lt;Reactions&gt;**](Reactions.md) |  | [default to undefined]

## Example

```typescript
import { OpenWebuiRoutersChannelsMessageUserResponse } from './api';

const instance: OpenWebuiRoutersChannelsMessageUserResponse = {
    id,
    user_id,
    channel_id,
    reply_to_id,
    parent_id,
    content,
    data,
    meta,
    created_at,
    updated_at,
    user,
    reply_to_message,
    latest_reply_at,
    reply_count,
    reactions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

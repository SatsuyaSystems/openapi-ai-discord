# ChatResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**user_id** | **string** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**chat** | **{ [key: string]: any; }** |  | [default to undefined]
**updated_at** | **number** |  | [default to undefined]
**created_at** | **number** |  | [default to undefined]
**share_id** | **string** |  | [optional] [default to undefined]
**archived** | **boolean** |  | [default to undefined]
**pinned** | **boolean** |  | [optional] [default to undefined]
**meta** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**folder_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ChatResponse } from './api';

const instance: ChatResponse = {
    id,
    user_id,
    title,
    chat,
    updated_at,
    created_at,
    share_id,
    archived,
    pinned,
    meta,
    folder_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

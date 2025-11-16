# ChannelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**user_id** | **string** |  | [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**meta** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**access_control** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**created_at** | **number** |  | [default to undefined]
**updated_at** | **number** |  | [default to undefined]
**write_access** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { ChannelResponse } from './api';

const instance: ChannelResponse = {
    id,
    user_id,
    type,
    name,
    description,
    data,
    meta,
    access_control,
    created_at,
    updated_at,
    write_access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

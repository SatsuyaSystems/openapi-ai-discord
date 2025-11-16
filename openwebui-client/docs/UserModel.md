# UserModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**username** | **string** |  | [optional] [default to undefined]
**role** | **string** |  | [optional] [default to 'pending']
**profile_image_url** | **string** |  | [default to undefined]
**bio** | **string** |  | [optional] [default to undefined]
**gender** | **string** |  | [optional] [default to undefined]
**date_of_birth** | **string** |  | [optional] [default to undefined]
**info** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**settings** | [**UserSettings**](UserSettings.md) |  | [optional] [default to undefined]
**api_key** | **string** |  | [optional] [default to undefined]
**oauth_sub** | **string** |  | [optional] [default to undefined]
**last_active_at** | **number** |  | [default to undefined]
**updated_at** | **number** |  | [default to undefined]
**created_at** | **number** |  | [default to undefined]

## Example

```typescript
import { UserModel } from './api';

const instance: UserModel = {
    id,
    name,
    email,
    username,
    role,
    profile_image_url,
    bio,
    gender,
    date_of_birth,
    info,
    settings,
    api_key,
    oauth_sub,
    last_active_at,
    updated_at,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

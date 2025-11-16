# AdminConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SHOW_ADMIN_DETAILS** | **boolean** |  | [default to undefined]
**WEBUI_URL** | **string** |  | [default to undefined]
**ENABLE_SIGNUP** | **boolean** |  | [default to undefined]
**ENABLE_API_KEY** | **boolean** |  | [default to undefined]
**ENABLE_API_KEY_ENDPOINT_RESTRICTIONS** | **boolean** |  | [default to undefined]
**API_KEY_ALLOWED_ENDPOINTS** | **string** |  | [default to undefined]
**DEFAULT_USER_ROLE** | **string** |  | [default to undefined]
**JWT_EXPIRES_IN** | **string** |  | [default to undefined]
**ENABLE_COMMUNITY_SHARING** | **boolean** |  | [default to undefined]
**ENABLE_MESSAGE_RATING** | **boolean** |  | [default to undefined]
**ENABLE_CHANNELS** | **boolean** |  | [default to undefined]
**ENABLE_NOTES** | **boolean** |  | [default to undefined]
**ENABLE_USER_WEBHOOKS** | **boolean** |  | [default to undefined]
**PENDING_USER_OVERLAY_TITLE** | **string** |  | [optional] [default to undefined]
**PENDING_USER_OVERLAY_CONTENT** | **string** |  | [optional] [default to undefined]
**RESPONSE_WATERMARK** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AdminConfig } from './api';

const instance: AdminConfig = {
    SHOW_ADMIN_DETAILS,
    WEBUI_URL,
    ENABLE_SIGNUP,
    ENABLE_API_KEY,
    ENABLE_API_KEY_ENDPOINT_RESTRICTIONS,
    API_KEY_ALLOWED_ENDPOINTS,
    DEFAULT_USER_ROLE,
    JWT_EXPIRES_IN,
    ENABLE_COMMUNITY_SHARING,
    ENABLE_MESSAGE_RATING,
    ENABLE_CHANNELS,
    ENABLE_NOTES,
    ENABLE_USER_WEBHOOKS,
    PENDING_USER_OVERLAY_TITLE,
    PENDING_USER_OVERLAY_CONTENT,
    RESPONSE_WATERMARK,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# FunctionUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**user_id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**content** | **string** |  | [default to undefined]
**meta** | [**FunctionMeta**](FunctionMeta.md) |  | [default to undefined]
**is_active** | **boolean** |  | [optional] [default to false]
**is_global** | **boolean** |  | [optional] [default to false]
**updated_at** | **number** |  | [default to undefined]
**created_at** | **number** |  | [default to undefined]
**user** | [**UserModel**](UserModel.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FunctionUserResponse } from './api';

const instance: FunctionUserResponse = {
    id,
    user_id,
    name,
    type,
    content,
    meta,
    is_active,
    is_global,
    updated_at,
    created_at,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

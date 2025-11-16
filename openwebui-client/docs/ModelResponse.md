# ModelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**user_id** | **string** |  | [default to undefined]
**base_model_id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**params** | **{ [key: string]: any; }** |  | [default to undefined]
**meta** | [**ModelMeta**](ModelMeta.md) |  | [default to undefined]
**access_control** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**is_active** | **boolean** |  | [default to undefined]
**updated_at** | **number** |  | [default to undefined]
**created_at** | **number** |  | [default to undefined]

## Example

```typescript
import { ModelResponse } from './api';

const instance: ModelResponse = {
    id,
    user_id,
    base_model_id,
    name,
    params,
    meta,
    access_control,
    is_active,
    updated_at,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

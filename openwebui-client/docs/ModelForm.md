# ModelForm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**base_model_id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**meta** | [**ModelMeta**](ModelMeta.md) |  | [default to undefined]
**params** | **{ [key: string]: any; }** |  | [default to undefined]
**access_control** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**is_active** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { ModelForm } from './api';

const instance: ModelForm = {
    id,
    base_model_id,
    name,
    meta,
    params,
    access_control,
    is_active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

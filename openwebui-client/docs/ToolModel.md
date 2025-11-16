# ToolModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**user_id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**content** | **string** |  | [default to undefined]
**specs** | **Array&lt;{ [key: string]: any; }&gt;** |  | [default to undefined]
**meta** | [**ToolMeta**](ToolMeta.md) |  | [default to undefined]
**access_control** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**updated_at** | **number** |  | [default to undefined]
**created_at** | **number** |  | [default to undefined]

## Example

```typescript
import { ToolModel } from './api';

const instance: ToolModel = {
    id,
    user_id,
    name,
    content,
    specs,
    meta,
    access_control,
    updated_at,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

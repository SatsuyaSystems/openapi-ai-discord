# FileModelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**user_id** | **string** |  | [default to undefined]
**hash** | **string** |  | [optional] [default to undefined]
**filename** | **string** |  | [default to undefined]
**data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**meta** | [**FileMeta**](FileMeta.md) |  | [default to undefined]
**created_at** | **number** |  | [default to undefined]
**updated_at** | **number** |  | [default to undefined]

## Example

```typescript
import { FileModelResponse } from './api';

const instance: FileModelResponse = {
    id,
    user_id,
    hash,
    filename,
    data,
    meta,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

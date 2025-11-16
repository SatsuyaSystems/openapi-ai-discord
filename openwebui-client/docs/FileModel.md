# FileModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**user_id** | **string** |  | [default to undefined]
**hash** | **string** |  | [optional] [default to undefined]
**filename** | **string** |  | [default to undefined]
**path** | **string** |  | [optional] [default to undefined]
**data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**meta** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**access_control** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**created_at** | **number** |  | [default to undefined]
**updated_at** | **number** |  | [default to undefined]

## Example

```typescript
import { FileModel } from './api';

const instance: FileModel = {
    id,
    user_id,
    hash,
    filename,
    path,
    data,
    meta,
    access_control,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

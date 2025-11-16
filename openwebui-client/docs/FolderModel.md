# FolderModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]
**user_id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**items** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**meta** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**is_expanded** | **boolean** |  | [optional] [default to false]
**created_at** | **number** |  | [default to undefined]
**updated_at** | **number** |  | [default to undefined]

## Example

```typescript
import { FolderModel } from './api';

const instance: FolderModel = {
    id,
    parent_id,
    user_id,
    name,
    items,
    meta,
    data,
    is_expanded,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

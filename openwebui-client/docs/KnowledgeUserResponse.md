# KnowledgeUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**user_id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**meta** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**access_control** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**created_at** | **number** |  | [default to undefined]
**updated_at** | **number** |  | [default to undefined]
**user** | [**OpenWebuiModelsUsersUserResponse**](OpenWebuiModelsUsersUserResponse.md) |  | [optional] [default to undefined]
**files** | [**Array&lt;KnowledgeResponseFilesInner&gt;**](KnowledgeResponseFilesInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { KnowledgeUserResponse } from './api';

const instance: KnowledgeUserResponse = {
    id,
    user_id,
    name,
    description,
    data,
    meta,
    access_control,
    created_at,
    updated_at,
    user,
    files,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

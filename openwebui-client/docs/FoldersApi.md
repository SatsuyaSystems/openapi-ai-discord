# FoldersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFolderApiV1FoldersPost**](#createfolderapiv1folderspost) | **POST** /api/v1/folders/ | Create Folder|
|[**deleteFolderByIdApiV1FoldersIdDelete**](#deletefolderbyidapiv1foldersiddelete) | **DELETE** /api/v1/folders/{id} | Delete Folder By Id|
|[**getFolderByIdApiV1FoldersIdGet**](#getfolderbyidapiv1foldersidget) | **GET** /api/v1/folders/{id} | Get Folder By Id|
|[**getFoldersApiV1FoldersGet**](#getfoldersapiv1foldersget) | **GET** /api/v1/folders/ | Get Folders|
|[**updateFolderIsExpandedByIdApiV1FoldersIdUpdateExpandedPost**](#updatefolderisexpandedbyidapiv1foldersidupdateexpandedpost) | **POST** /api/v1/folders/{id}/update/expanded | Update Folder Is Expanded By Id|
|[**updateFolderNameByIdApiV1FoldersIdUpdatePost**](#updatefoldernamebyidapiv1foldersidupdatepost) | **POST** /api/v1/folders/{id}/update | Update Folder Name By Id|
|[**updateFolderParentIdByIdApiV1FoldersIdUpdateParentPost**](#updatefolderparentidbyidapiv1foldersidupdateparentpost) | **POST** /api/v1/folders/{id}/update/parent | Update Folder Parent Id By Id|

# **createFolderApiV1FoldersPost**
> any createFolderApiV1FoldersPost(folderForm)


### Example

```typescript
import {
    FoldersApi,
    Configuration,
    FolderForm
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let folderForm: FolderForm; //

const { status, data } = await apiInstance.createFolderApiV1FoldersPost(
    folderForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderForm** | **FolderForm**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFolderByIdApiV1FoldersIdDelete**
> any deleteFolderByIdApiV1FoldersIdDelete()


### Example

```typescript
import {
    FoldersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFolderByIdApiV1FoldersIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderByIdApiV1FoldersIdGet**
> FolderModel getFolderByIdApiV1FoldersIdGet()


### Example

```typescript
import {
    FoldersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getFolderByIdApiV1FoldersIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FolderModel**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFoldersApiV1FoldersGet**
> Array<FolderNameIdResponse> getFoldersApiV1FoldersGet()


### Example

```typescript
import {
    FoldersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

const { status, data } = await apiInstance.getFoldersApiV1FoldersGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FolderNameIdResponse>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFolderIsExpandedByIdApiV1FoldersIdUpdateExpandedPost**
> any updateFolderIsExpandedByIdApiV1FoldersIdUpdateExpandedPost(folderIsExpandedForm)


### Example

```typescript
import {
    FoldersApi,
    Configuration,
    FolderIsExpandedForm
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let id: string; // (default to undefined)
let folderIsExpandedForm: FolderIsExpandedForm; //

const { status, data } = await apiInstance.updateFolderIsExpandedByIdApiV1FoldersIdUpdateExpandedPost(
    id,
    folderIsExpandedForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderIsExpandedForm** | **FolderIsExpandedForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFolderNameByIdApiV1FoldersIdUpdatePost**
> any updateFolderNameByIdApiV1FoldersIdUpdatePost(folderUpdateForm)


### Example

```typescript
import {
    FoldersApi,
    Configuration,
    FolderUpdateForm
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let id: string; // (default to undefined)
let folderUpdateForm: FolderUpdateForm; //

const { status, data } = await apiInstance.updateFolderNameByIdApiV1FoldersIdUpdatePost(
    id,
    folderUpdateForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderUpdateForm** | **FolderUpdateForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFolderParentIdByIdApiV1FoldersIdUpdateParentPost**
> any updateFolderParentIdByIdApiV1FoldersIdUpdateParentPost(folderParentIdForm)


### Example

```typescript
import {
    FoldersApi,
    Configuration,
    FolderParentIdForm
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let id: string; // (default to undefined)
let folderParentIdForm: FolderParentIdForm; //

const { status, data } = await apiInstance.updateFolderParentIdByIdApiV1FoldersIdUpdateParentPost(
    id,
    folderParentIdForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderParentIdForm** | **FolderParentIdForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


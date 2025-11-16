# FilesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAllFilesApiV1FilesAllDelete**](#deleteallfilesapiv1filesalldelete) | **DELETE** /api/v1/files/all | Delete All Files|
|[**deleteFileByIdApiV1FilesIdDelete**](#deletefilebyidapiv1filesiddelete) | **DELETE** /api/v1/files/{id} | Delete File By Id|
|[**getFileByIdApiV1FilesIdGet**](#getfilebyidapiv1filesidget) | **GET** /api/v1/files/{id} | Get File By Id|
|[**getFileContentByIdApiV1FilesIdContentFileNameGet**](#getfilecontentbyidapiv1filesidcontentfilenameget) | **GET** /api/v1/files/{id}/content/{file_name} | Get File Content By Id|
|[**getFileContentByIdApiV1FilesIdContentGet**](#getfilecontentbyidapiv1filesidcontentget) | **GET** /api/v1/files/{id}/content | Get File Content By Id|
|[**getFileDataContentByIdApiV1FilesIdDataContentGet**](#getfiledatacontentbyidapiv1filesiddatacontentget) | **GET** /api/v1/files/{id}/data/content | Get File Data Content By Id|
|[**getFileProcessStatusApiV1FilesIdProcessStatusGet**](#getfileprocessstatusapiv1filesidprocessstatusget) | **GET** /api/v1/files/{id}/process/status | Get File Process Status|
|[**getHtmlFileContentByIdApiV1FilesIdContentHtmlGet**](#gethtmlfilecontentbyidapiv1filesidcontenthtmlget) | **GET** /api/v1/files/{id}/content/html | Get Html File Content By Id|
|[**listFilesApiV1FilesGet**](#listfilesapiv1filesget) | **GET** /api/v1/files/ | List Files|
|[**searchFilesApiV1FilesSearchGet**](#searchfilesapiv1filessearchget) | **GET** /api/v1/files/search | Search Files|
|[**updateFileDataContentByIdApiV1FilesIdDataContentUpdatePost**](#updatefiledatacontentbyidapiv1filesiddatacontentupdatepost) | **POST** /api/v1/files/{id}/data/content/update | Update File Data Content By Id|
|[**uploadFileApiV1FilesPost**](#uploadfileapiv1filespost) | **POST** /api/v1/files/ | Upload File|

# **deleteAllFilesApiV1FilesAllDelete**
> any deleteAllFilesApiV1FilesAllDelete()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

const { status, data } = await apiInstance.deleteAllFilesApiV1FilesAllDelete();
```

### Parameters
This endpoint does not have any parameters.


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFileByIdApiV1FilesIdDelete**
> any deleteFileByIdApiV1FilesIdDelete()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFileByIdApiV1FilesIdDelete(
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

# **getFileByIdApiV1FilesIdGet**
> FileModel getFileByIdApiV1FilesIdGet()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getFileByIdApiV1FilesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FileModel**

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

# **getFileContentByIdApiV1FilesIdContentFileNameGet**
> any getFileContentByIdApiV1FilesIdContentFileNameGet()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getFileContentByIdApiV1FilesIdContentFileNameGet(
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

# **getFileContentByIdApiV1FilesIdContentGet**
> any getFileContentByIdApiV1FilesIdContentGet()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: string; // (default to undefined)
let attachment: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getFileContentByIdApiV1FilesIdContentGet(
    id,
    attachment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **attachment** | [**boolean**] |  | (optional) defaults to false|


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

# **getFileDataContentByIdApiV1FilesIdDataContentGet**
> any getFileDataContentByIdApiV1FilesIdDataContentGet()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getFileDataContentByIdApiV1FilesIdDataContentGet(
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

# **getFileProcessStatusApiV1FilesIdProcessStatusGet**
> any getFileProcessStatusApiV1FilesIdProcessStatusGet()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: string; // (default to undefined)
let stream: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getFileProcessStatusApiV1FilesIdProcessStatusGet(
    id,
    stream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **stream** | [**boolean**] |  | (optional) defaults to false|


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

# **getHtmlFileContentByIdApiV1FilesIdContentHtmlGet**
> any getHtmlFileContentByIdApiV1FilesIdContentHtmlGet()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getHtmlFileContentByIdApiV1FilesIdContentHtmlGet(
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

# **listFilesApiV1FilesGet**
> Array<FileModelResponse> listFilesApiV1FilesGet()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let content: boolean; // (optional) (default to true)

const { status, data } = await apiInstance.listFilesApiV1FilesGet(
    content
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **content** | [**boolean**] |  | (optional) defaults to true|


### Return type

**Array<FileModelResponse>**

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

# **searchFilesApiV1FilesSearchGet**
> Array<FileModelResponse> searchFilesApiV1FilesSearchGet()

Search for files by filename with support for wildcard patterns.

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let filename: string; //Filename pattern to search for. Supports wildcards such as \'*.txt\' (default to undefined)
let content: boolean; // (optional) (default to true)

const { status, data } = await apiInstance.searchFilesApiV1FilesSearchGet(
    filename,
    content
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filename** | [**string**] | Filename pattern to search for. Supports wildcards such as \&#39;*.txt\&#39; | defaults to undefined|
| **content** | [**boolean**] |  | (optional) defaults to true|


### Return type

**Array<FileModelResponse>**

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

# **updateFileDataContentByIdApiV1FilesIdDataContentUpdatePost**
> any updateFileDataContentByIdApiV1FilesIdDataContentUpdatePost(contentForm)


### Example

```typescript
import {
    FilesApi,
    Configuration,
    ContentForm
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let id: string; // (default to undefined)
let contentForm: ContentForm; //

const { status, data } = await apiInstance.updateFileDataContentByIdApiV1FilesIdDataContentUpdatePost(
    id,
    contentForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentForm** | **ContentForm**|  | |
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

# **uploadFileApiV1FilesPost**
> FileModelResponse uploadFileApiV1FilesPost()


### Example

```typescript
import {
    FilesApi,
    Configuration,
    Metadata
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let file: File; // (default to undefined)
let process: boolean; // (optional) (default to true)
let processInBackground: boolean; // (optional) (default to true)
let metadata: Metadata; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadFileApiV1FilesPost(
    file,
    process,
    processInBackground,
    metadata
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **process** | [**boolean**] |  | (optional) defaults to true|
| **processInBackground** | [**boolean**] |  | (optional) defaults to true|
| **metadata** | **Metadata** |  | (optional) defaults to undefined|


### Return type

**FileModelResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


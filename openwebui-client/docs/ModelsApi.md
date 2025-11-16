# ModelsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createNewModelApiV1ModelsCreatePost**](#createnewmodelapiv1modelscreatepost) | **POST** /api/v1/models/create | Create New Model|
|[**deleteAllModelsApiV1ModelsDeleteAllDelete**](#deleteallmodelsapiv1modelsdeletealldelete) | **DELETE** /api/v1/models/delete/all | Delete All Models|
|[**deleteModelByIdApiV1ModelsModelDeleteDelete**](#deletemodelbyidapiv1modelsmodeldeletedelete) | **DELETE** /api/v1/models/model/delete | Delete Model By Id|
|[**exportModelsApiV1ModelsExportGet**](#exportmodelsapiv1modelsexportget) | **GET** /api/v1/models/export | Export Models|
|[**getBaseModelsApiV1ModelsBaseGet**](#getbasemodelsapiv1modelsbaseget) | **GET** /api/v1/models/base | Get Base Models|
|[**getModelByIdApiV1ModelsModelGet**](#getmodelbyidapiv1modelsmodelget) | **GET** /api/v1/models/model | Get Model By Id|
|[**getModelProfileImageApiV1ModelsModelProfileImageGet**](#getmodelprofileimageapiv1modelsmodelprofileimageget) | **GET** /api/v1/models/model/profile/image | Get Model Profile Image|
|[**getModelsApiV1ModelsListGet**](#getmodelsapiv1modelslistget) | **GET** /api/v1/models/list | Get Models|
|[**importModelsApiV1ModelsImportPost**](#importmodelsapiv1modelsimportpost) | **POST** /api/v1/models/import | Import Models|
|[**syncModelsApiV1ModelsSyncPost**](#syncmodelsapiv1modelssyncpost) | **POST** /api/v1/models/sync | Sync Models|
|[**toggleModelByIdApiV1ModelsModelTogglePost**](#togglemodelbyidapiv1modelsmodeltogglepost) | **POST** /api/v1/models/model/toggle | Toggle Model By Id|
|[**updateModelByIdApiV1ModelsModelUpdatePost**](#updatemodelbyidapiv1modelsmodelupdatepost) | **POST** /api/v1/models/model/update | Update Model By Id|

# **createNewModelApiV1ModelsCreatePost**
> ModelModel createNewModelApiV1ModelsCreatePost(modelForm)


### Example

```typescript
import {
    ModelsApi,
    Configuration,
    ModelForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let modelForm: ModelForm; //

const { status, data } = await apiInstance.createNewModelApiV1ModelsCreatePost(
    modelForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelForm** | **ModelForm**|  | |


### Return type

**ModelModel**

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

# **deleteAllModelsApiV1ModelsDeleteAllDelete**
> boolean deleteAllModelsApiV1ModelsDeleteAllDelete()


### Example

```typescript
import {
    ModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

const { status, data } = await apiInstance.deleteAllModelsApiV1ModelsDeleteAllDelete();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**boolean**

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

# **deleteModelByIdApiV1ModelsModelDeleteDelete**
> boolean deleteModelByIdApiV1ModelsModelDeleteDelete()


### Example

```typescript
import {
    ModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteModelByIdApiV1ModelsModelDeleteDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

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

# **exportModelsApiV1ModelsExportGet**
> Array<ModelModel> exportModelsApiV1ModelsExportGet()


### Example

```typescript
import {
    ModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

const { status, data } = await apiInstance.exportModelsApiV1ModelsExportGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ModelModel>**

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

# **getBaseModelsApiV1ModelsBaseGet**
> Array<ModelResponse> getBaseModelsApiV1ModelsBaseGet()


### Example

```typescript
import {
    ModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

const { status, data } = await apiInstance.getBaseModelsApiV1ModelsBaseGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ModelResponse>**

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

# **getModelByIdApiV1ModelsModelGet**
> ModelResponse getModelByIdApiV1ModelsModelGet()


### Example

```typescript
import {
    ModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getModelByIdApiV1ModelsModelGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ModelResponse**

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

# **getModelProfileImageApiV1ModelsModelProfileImageGet**
> any getModelProfileImageApiV1ModelsModelProfileImageGet()


### Example

```typescript
import {
    ModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getModelProfileImageApiV1ModelsModelProfileImageGet(
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

# **getModelsApiV1ModelsListGet**
> Array<ModelUserResponse> getModelsApiV1ModelsListGet()


### Example

```typescript
import {
    ModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let id: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getModelsApiV1ModelsListGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ModelUserResponse>**

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

# **importModelsApiV1ModelsImportPost**
> boolean importModelsApiV1ModelsImportPost(modelsImportForm)


### Example

```typescript
import {
    ModelsApi,
    Configuration,
    ModelsImportForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let modelsImportForm: ModelsImportForm; //

const { status, data } = await apiInstance.importModelsApiV1ModelsImportPost(
    modelsImportForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelsImportForm** | **ModelsImportForm**|  | |


### Return type

**boolean**

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

# **syncModelsApiV1ModelsSyncPost**
> Array<ModelModel> syncModelsApiV1ModelsSyncPost(syncModelsForm)


### Example

```typescript
import {
    ModelsApi,
    Configuration,
    SyncModelsForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let syncModelsForm: SyncModelsForm; //

const { status, data } = await apiInstance.syncModelsApiV1ModelsSyncPost(
    syncModelsForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncModelsForm** | **SyncModelsForm**|  | |


### Return type

**Array<ModelModel>**

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

# **toggleModelByIdApiV1ModelsModelTogglePost**
> ModelResponse toggleModelByIdApiV1ModelsModelTogglePost()


### Example

```typescript
import {
    ModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.toggleModelByIdApiV1ModelsModelTogglePost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ModelResponse**

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

# **updateModelByIdApiV1ModelsModelUpdatePost**
> ModelModel updateModelByIdApiV1ModelsModelUpdatePost(modelForm)


### Example

```typescript
import {
    ModelsApi,
    Configuration,
    ModelForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let id: string; // (default to undefined)
let modelForm: ModelForm; //

const { status, data } = await apiInstance.updateModelByIdApiV1ModelsModelUpdatePost(
    id,
    modelForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelForm** | **ModelForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ModelModel**

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


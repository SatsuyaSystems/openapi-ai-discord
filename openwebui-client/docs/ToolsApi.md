# ToolsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createNewToolsApiV1ToolsCreatePost**](#createnewtoolsapiv1toolscreatepost) | **POST** /api/v1/tools/create | Create New Tools|
|[**deleteToolsByIdApiV1ToolsIdIdDeleteDelete**](#deletetoolsbyidapiv1toolsididdeletedelete) | **DELETE** /api/v1/tools/id/{id}/delete | Delete Tools By Id|
|[**exportToolsApiV1ToolsExportGet**](#exporttoolsapiv1toolsexportget) | **GET** /api/v1/tools/export | Export Tools|
|[**getToolListApiV1ToolsListGet**](#gettoollistapiv1toolslistget) | **GET** /api/v1/tools/list | Get Tool List|
|[**getToolsApiV1ToolsGet**](#gettoolsapiv1toolsget) | **GET** /api/v1/tools/ | Get Tools|
|[**getToolsByIdApiV1ToolsIdIdGet**](#gettoolsbyidapiv1toolsididget) | **GET** /api/v1/tools/id/{id} | Get Tools By Id|
|[**getToolsUserValvesByIdApiV1ToolsIdIdValvesUserGet**](#gettoolsuservalvesbyidapiv1toolsididvalvesuserget) | **GET** /api/v1/tools/id/{id}/valves/user | Get Tools User Valves By Id|
|[**getToolsUserValvesSpecByIdApiV1ToolsIdIdValvesUserSpecGet**](#gettoolsuservalvesspecbyidapiv1toolsididvalvesuserspecget) | **GET** /api/v1/tools/id/{id}/valves/user/spec | Get Tools User Valves Spec By Id|
|[**getToolsValvesByIdApiV1ToolsIdIdValvesGet**](#gettoolsvalvesbyidapiv1toolsididvalvesget) | **GET** /api/v1/tools/id/{id}/valves | Get Tools Valves By Id|
|[**getToolsValvesSpecByIdApiV1ToolsIdIdValvesSpecGet**](#gettoolsvalvesspecbyidapiv1toolsididvalvesspecget) | **GET** /api/v1/tools/id/{id}/valves/spec | Get Tools Valves Spec By Id|
|[**loadToolFromUrlApiV1ToolsLoadUrlPost**](#loadtoolfromurlapiv1toolsloadurlpost) | **POST** /api/v1/tools/load/url | Load Tool From Url|
|[**updateToolsByIdApiV1ToolsIdIdUpdatePost**](#updatetoolsbyidapiv1toolsididupdatepost) | **POST** /api/v1/tools/id/{id}/update | Update Tools By Id|
|[**updateToolsUserValvesByIdApiV1ToolsIdIdValvesUserUpdatePost**](#updatetoolsuservalvesbyidapiv1toolsididvalvesuserupdatepost) | **POST** /api/v1/tools/id/{id}/valves/user/update | Update Tools User Valves By Id|
|[**updateToolsValvesByIdApiV1ToolsIdIdValvesUpdatePost**](#updatetoolsvalvesbyidapiv1toolsididvalvesupdatepost) | **POST** /api/v1/tools/id/{id}/valves/update | Update Tools Valves By Id|

# **createNewToolsApiV1ToolsCreatePost**
> ToolResponse createNewToolsApiV1ToolsCreatePost(toolForm)


### Example

```typescript
import {
    ToolsApi,
    Configuration,
    ToolForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

let toolForm: ToolForm; //

const { status, data } = await apiInstance.createNewToolsApiV1ToolsCreatePost(
    toolForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **toolForm** | **ToolForm**|  | |


### Return type

**ToolResponse**

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

# **deleteToolsByIdApiV1ToolsIdIdDeleteDelete**
> boolean deleteToolsByIdApiV1ToolsIdIdDeleteDelete()


### Example

```typescript
import {
    ToolsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteToolsByIdApiV1ToolsIdIdDeleteDelete(
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

# **exportToolsApiV1ToolsExportGet**
> Array<ToolModel> exportToolsApiV1ToolsExportGet()


### Example

```typescript
import {
    ToolsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

const { status, data } = await apiInstance.exportToolsApiV1ToolsExportGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ToolModel>**

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

# **getToolListApiV1ToolsListGet**
> Array<ToolUserResponse> getToolListApiV1ToolsListGet()


### Example

```typescript
import {
    ToolsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

const { status, data } = await apiInstance.getToolListApiV1ToolsListGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ToolUserResponse>**

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

# **getToolsApiV1ToolsGet**
> Array<ToolUserResponse> getToolsApiV1ToolsGet()


### Example

```typescript
import {
    ToolsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

const { status, data } = await apiInstance.getToolsApiV1ToolsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ToolUserResponse>**

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

# **getToolsByIdApiV1ToolsIdIdGet**
> ToolModel getToolsByIdApiV1ToolsIdIdGet()


### Example

```typescript
import {
    ToolsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getToolsByIdApiV1ToolsIdIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ToolModel**

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

# **getToolsUserValvesByIdApiV1ToolsIdIdValvesUserGet**
> { [key: string]: any; } getToolsUserValvesByIdApiV1ToolsIdIdValvesUserGet()


### Example

```typescript
import {
    ToolsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getToolsUserValvesByIdApiV1ToolsIdIdValvesUserGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **getToolsUserValvesSpecByIdApiV1ToolsIdIdValvesUserSpecGet**
> { [key: string]: any; } getToolsUserValvesSpecByIdApiV1ToolsIdIdValvesUserSpecGet()


### Example

```typescript
import {
    ToolsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getToolsUserValvesSpecByIdApiV1ToolsIdIdValvesUserSpecGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **getToolsValvesByIdApiV1ToolsIdIdValvesGet**
> { [key: string]: any; } getToolsValvesByIdApiV1ToolsIdIdValvesGet()


### Example

```typescript
import {
    ToolsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getToolsValvesByIdApiV1ToolsIdIdValvesGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **getToolsValvesSpecByIdApiV1ToolsIdIdValvesSpecGet**
> { [key: string]: any; } getToolsValvesSpecByIdApiV1ToolsIdIdValvesSpecGet()


### Example

```typescript
import {
    ToolsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getToolsValvesSpecByIdApiV1ToolsIdIdValvesSpecGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **loadToolFromUrlApiV1ToolsLoadUrlPost**
> { [key: string]: any; } loadToolFromUrlApiV1ToolsLoadUrlPost(loadUrlForm)


### Example

```typescript
import {
    ToolsApi,
    Configuration,
    LoadUrlForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

let loadUrlForm: LoadUrlForm; //

const { status, data } = await apiInstance.loadToolFromUrlApiV1ToolsLoadUrlPost(
    loadUrlForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loadUrlForm** | **LoadUrlForm**|  | |


### Return type

**{ [key: string]: any; }**

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

# **updateToolsByIdApiV1ToolsIdIdUpdatePost**
> ToolModel updateToolsByIdApiV1ToolsIdIdUpdatePost(toolForm)


### Example

```typescript
import {
    ToolsApi,
    Configuration,
    ToolForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

let id: string; // (default to undefined)
let toolForm: ToolForm; //

const { status, data } = await apiInstance.updateToolsByIdApiV1ToolsIdIdUpdatePost(
    id,
    toolForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **toolForm** | **ToolForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ToolModel**

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

# **updateToolsUserValvesByIdApiV1ToolsIdIdValvesUserUpdatePost**
> { [key: string]: any; } updateToolsUserValvesByIdApiV1ToolsIdIdValvesUserUpdatePost(requestBody)


### Example

```typescript
import {
    ToolsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

let id: string; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.updateToolsUserValvesByIdApiV1ToolsIdIdValvesUserUpdatePost(
    id,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **updateToolsValvesByIdApiV1ToolsIdIdValvesUpdatePost**
> { [key: string]: any; } updateToolsValvesByIdApiV1ToolsIdIdValvesUpdatePost(requestBody)


### Example

```typescript
import {
    ToolsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ToolsApi(configuration);

let id: string; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.updateToolsValvesByIdApiV1ToolsIdIdValvesUpdatePost(
    id,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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


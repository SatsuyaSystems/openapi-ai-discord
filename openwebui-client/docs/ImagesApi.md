# ImagesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getConfigApiV1ImagesConfigGet**](#getconfigapiv1imagesconfigget) | **GET** /api/v1/images/config | Get Config|
|[**getModelsApiV1ImagesModelsGet**](#getmodelsapiv1imagesmodelsget) | **GET** /api/v1/images/models | Get Models|
|[**imageEditsApiV1ImagesEditPost**](#imageeditsapiv1imageseditpost) | **POST** /api/v1/images/edit | Image Edits|
|[**imageGenerationsApiV1ImagesGenerationsPost**](#imagegenerationsapiv1imagesgenerationspost) | **POST** /api/v1/images/generations | Image Generations|
|[**updateConfigApiV1ImagesConfigUpdatePost**](#updateconfigapiv1imagesconfigupdatepost) | **POST** /api/v1/images/config/update | Update Config|
|[**verifyUrlApiV1ImagesConfigUrlVerifyGet**](#verifyurlapiv1imagesconfigurlverifyget) | **GET** /api/v1/images/config/url/verify | Verify Url|

# **getConfigApiV1ImagesConfigGet**
> ImagesConfig getConfigApiV1ImagesConfigGet()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

const { status, data } = await apiInstance.getConfigApiV1ImagesConfigGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ImagesConfig**

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

# **getModelsApiV1ImagesModelsGet**
> any getModelsApiV1ImagesModelsGet()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

const { status, data } = await apiInstance.getModelsApiV1ImagesModelsGet();
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

# **imageEditsApiV1ImagesEditPost**
> any imageEditsApiV1ImagesEditPost(editImageForm)


### Example

```typescript
import {
    ImagesApi,
    Configuration,
    EditImageForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let editImageForm: EditImageForm; //

const { status, data } = await apiInstance.imageEditsApiV1ImagesEditPost(
    editImageForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **editImageForm** | **EditImageForm**|  | |


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

# **imageGenerationsApiV1ImagesGenerationsPost**
> any imageGenerationsApiV1ImagesGenerationsPost(createImageForm)


### Example

```typescript
import {
    ImagesApi,
    Configuration,
    CreateImageForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let createImageForm: CreateImageForm; //

const { status, data } = await apiInstance.imageGenerationsApiV1ImagesGenerationsPost(
    createImageForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createImageForm** | **CreateImageForm**|  | |


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

# **updateConfigApiV1ImagesConfigUpdatePost**
> any updateConfigApiV1ImagesConfigUpdatePost(imagesConfig)


### Example

```typescript
import {
    ImagesApi,
    Configuration,
    ImagesConfig
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let imagesConfig: ImagesConfig; //

const { status, data } = await apiInstance.updateConfigApiV1ImagesConfigUpdatePost(
    imagesConfig
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **imagesConfig** | **ImagesConfig**|  | |


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

# **verifyUrlApiV1ImagesConfigUrlVerifyGet**
> any verifyUrlApiV1ImagesConfigUrlVerifyGet()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

const { status, data } = await apiInstance.verifyUrlApiV1ImagesConfigUrlVerifyGet();
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


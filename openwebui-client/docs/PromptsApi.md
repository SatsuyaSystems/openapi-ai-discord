# PromptsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createNewPromptApiV1PromptsCreatePost**](#createnewpromptapiv1promptscreatepost) | **POST** /api/v1/prompts/create | Create New Prompt|
|[**deletePromptByCommandApiV1PromptsCommandCommandDeleteDelete**](#deletepromptbycommandapiv1promptscommandcommanddeletedelete) | **DELETE** /api/v1/prompts/command/{command}/delete | Delete Prompt By Command|
|[**getPromptByCommandApiV1PromptsCommandCommandGet**](#getpromptbycommandapiv1promptscommandcommandget) | **GET** /api/v1/prompts/command/{command} | Get Prompt By Command|
|[**getPromptListApiV1PromptsListGet**](#getpromptlistapiv1promptslistget) | **GET** /api/v1/prompts/list | Get Prompt List|
|[**getPromptsApiV1PromptsGet**](#getpromptsapiv1promptsget) | **GET** /api/v1/prompts/ | Get Prompts|
|[**updatePromptByCommandApiV1PromptsCommandCommandUpdatePost**](#updatepromptbycommandapiv1promptscommandcommandupdatepost) | **POST** /api/v1/prompts/command/{command}/update | Update Prompt By Command|

# **createNewPromptApiV1PromptsCreatePost**
> PromptModel createNewPromptApiV1PromptsCreatePost(promptForm)


### Example

```typescript
import {
    PromptsApi,
    Configuration,
    PromptForm
} from './api';

const configuration = new Configuration();
const apiInstance = new PromptsApi(configuration);

let promptForm: PromptForm; //

const { status, data } = await apiInstance.createNewPromptApiV1PromptsCreatePost(
    promptForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **promptForm** | **PromptForm**|  | |


### Return type

**PromptModel**

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

# **deletePromptByCommandApiV1PromptsCommandCommandDeleteDelete**
> boolean deletePromptByCommandApiV1PromptsCommandCommandDeleteDelete()


### Example

```typescript
import {
    PromptsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PromptsApi(configuration);

let command: string; // (default to undefined)

const { status, data } = await apiInstance.deletePromptByCommandApiV1PromptsCommandCommandDeleteDelete(
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **command** | [**string**] |  | defaults to undefined|


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

# **getPromptByCommandApiV1PromptsCommandCommandGet**
> PromptModel getPromptByCommandApiV1PromptsCommandCommandGet()


### Example

```typescript
import {
    PromptsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PromptsApi(configuration);

let command: string; // (default to undefined)

const { status, data } = await apiInstance.getPromptByCommandApiV1PromptsCommandCommandGet(
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **command** | [**string**] |  | defaults to undefined|


### Return type

**PromptModel**

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

# **getPromptListApiV1PromptsListGet**
> Array<PromptUserResponse> getPromptListApiV1PromptsListGet()


### Example

```typescript
import {
    PromptsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PromptsApi(configuration);

const { status, data } = await apiInstance.getPromptListApiV1PromptsListGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PromptUserResponse>**

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

# **getPromptsApiV1PromptsGet**
> Array<PromptModel> getPromptsApiV1PromptsGet()


### Example

```typescript
import {
    PromptsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PromptsApi(configuration);

const { status, data } = await apiInstance.getPromptsApiV1PromptsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PromptModel>**

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

# **updatePromptByCommandApiV1PromptsCommandCommandUpdatePost**
> PromptModel updatePromptByCommandApiV1PromptsCommandCommandUpdatePost(promptForm)


### Example

```typescript
import {
    PromptsApi,
    Configuration,
    PromptForm
} from './api';

const configuration = new Configuration();
const apiInstance = new PromptsApi(configuration);

let command: string; // (default to undefined)
let promptForm: PromptForm; //

const { status, data } = await apiInstance.updatePromptByCommandApiV1PromptsCommandCommandUpdatePost(
    command,
    promptForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **promptForm** | **PromptForm**|  | |
| **command** | [**string**] |  | defaults to undefined|


### Return type

**PromptModel**

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


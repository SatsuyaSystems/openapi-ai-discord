# OpenaiApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**generateChatCompletionOpenaiChatCompletionsPost**](#generatechatcompletionopenaichatcompletionspost) | **POST** /openai/chat/completions | Generate Chat Completion|
|[**getConfigOpenaiConfigGet**](#getconfigopenaiconfigget) | **GET** /openai/config | Get Config|
|[**getModelsOpenaiModelsGet**](#getmodelsopenaimodelsget) | **GET** /openai/models | Get Models|
|[**getModelsOpenaiModelsUrlIdxGet**](#getmodelsopenaimodelsurlidxget) | **GET** /openai/models/{url_idx} | Get Models|
|[**proxyOpenaiPathPost**](#proxyopenaipathpost) | **GET** /openai/{path} | Proxy|
|[**proxyOpenaiPathPost_0**](#proxyopenaipathpost_0) | **PUT** /openai/{path} | Proxy|
|[**proxyOpenaiPathPost_1**](#proxyopenaipathpost_1) | **POST** /openai/{path} | Proxy|
|[**proxyOpenaiPathPost_2**](#proxyopenaipathpost_2) | **DELETE** /openai/{path} | Proxy|
|[**speechOpenaiAudioSpeechPost**](#speechopenaiaudiospeechpost) | **POST** /openai/audio/speech | Speech|
|[**updateConfigOpenaiConfigUpdatePost**](#updateconfigopenaiconfigupdatepost) | **POST** /openai/config/update | Update Config|
|[**verifyConnectionOpenaiVerifyPost**](#verifyconnectionopenaiverifypost) | **POST** /openai/verify | Verify Connection|

# **generateChatCompletionOpenaiChatCompletionsPost**
> any generateChatCompletionOpenaiChatCompletionsPost(requestBody)


### Example

```typescript
import {
    OpenaiApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenaiApi(configuration);

let requestBody: { [key: string]: any; }; //
let bypassFilter: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.generateChatCompletionOpenaiChatCompletionsPost(
    requestBody,
    bypassFilter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **bypassFilter** | [**boolean**] |  | (optional) defaults to undefined|


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

# **getConfigOpenaiConfigGet**
> any getConfigOpenaiConfigGet()


### Example

```typescript
import {
    OpenaiApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenaiApi(configuration);

const { status, data } = await apiInstance.getConfigOpenaiConfigGet();
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

# **getModelsOpenaiModelsGet**
> any getModelsOpenaiModelsGet()


### Example

```typescript
import {
    OpenaiApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenaiApi(configuration);

let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getModelsOpenaiModelsGet(
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


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

# **getModelsOpenaiModelsUrlIdxGet**
> any getModelsOpenaiModelsUrlIdxGet()


### Example

```typescript
import {
    OpenaiApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenaiApi(configuration);

let urlIdx: number; // (default to undefined)

const { status, data } = await apiInstance.getModelsOpenaiModelsUrlIdxGet(
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **proxyOpenaiPathPost**
> any proxyOpenaiPathPost()

Deprecated: proxy all requests to OpenAI API

### Example

```typescript
import {
    OpenaiApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenaiApi(configuration);

let path: string; // (default to undefined)

const { status, data } = await apiInstance.proxyOpenaiPathPost(
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] |  | defaults to undefined|


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

# **proxyOpenaiPathPost_0**
> any proxyOpenaiPathPost_0()

Deprecated: proxy all requests to OpenAI API

### Example

```typescript
import {
    OpenaiApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenaiApi(configuration);

let path: string; // (default to undefined)

const { status, data } = await apiInstance.proxyOpenaiPathPost_0(
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] |  | defaults to undefined|


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

# **proxyOpenaiPathPost_1**
> any proxyOpenaiPathPost_1()

Deprecated: proxy all requests to OpenAI API

### Example

```typescript
import {
    OpenaiApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenaiApi(configuration);

let path: string; // (default to undefined)

const { status, data } = await apiInstance.proxyOpenaiPathPost_1(
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] |  | defaults to undefined|


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

# **proxyOpenaiPathPost_2**
> any proxyOpenaiPathPost_2()

Deprecated: proxy all requests to OpenAI API

### Example

```typescript
import {
    OpenaiApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenaiApi(configuration);

let path: string; // (default to undefined)

const { status, data } = await apiInstance.proxyOpenaiPathPost_2(
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] |  | defaults to undefined|


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

# **speechOpenaiAudioSpeechPost**
> any speechOpenaiAudioSpeechPost()


### Example

```typescript
import {
    OpenaiApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenaiApi(configuration);

const { status, data } = await apiInstance.speechOpenaiAudioSpeechPost();
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

# **updateConfigOpenaiConfigUpdatePost**
> any updateConfigOpenaiConfigUpdatePost(openWebuiRoutersOpenaiOpenAIConfigForm)


### Example

```typescript
import {
    OpenaiApi,
    Configuration,
    OpenWebuiRoutersOpenaiOpenAIConfigForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenaiApi(configuration);

let openWebuiRoutersOpenaiOpenAIConfigForm: OpenWebuiRoutersOpenaiOpenAIConfigForm; //

const { status, data } = await apiInstance.updateConfigOpenaiConfigUpdatePost(
    openWebuiRoutersOpenaiOpenAIConfigForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **openWebuiRoutersOpenaiOpenAIConfigForm** | **OpenWebuiRoutersOpenaiOpenAIConfigForm**|  | |


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

# **verifyConnectionOpenaiVerifyPost**
> any verifyConnectionOpenaiVerifyPost(openWebuiRoutersOpenaiConnectionVerificationForm)


### Example

```typescript
import {
    OpenaiApi,
    Configuration,
    OpenWebuiRoutersOpenaiConnectionVerificationForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenaiApi(configuration);

let openWebuiRoutersOpenaiConnectionVerificationForm: OpenWebuiRoutersOpenaiConnectionVerificationForm; //

const { status, data } = await apiInstance.verifyConnectionOpenaiVerifyPost(
    openWebuiRoutersOpenaiConnectionVerificationForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **openWebuiRoutersOpenaiConnectionVerificationForm** | **OpenWebuiRoutersOpenaiConnectionVerificationForm**|  | |


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


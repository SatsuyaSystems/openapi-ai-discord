# OllamaApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**copyModelOllamaApiCopyPost**](#copymodelollamaapicopypost) | **POST** /ollama/api/copy | Copy Model|
|[**copyModelOllamaApiCopyUrlIdxPost**](#copymodelollamaapicopyurlidxpost) | **POST** /ollama/api/copy/{url_idx} | Copy Model|
|[**createModelOllamaApiCreatePost**](#createmodelollamaapicreatepost) | **POST** /ollama/api/create | Create Model|
|[**createModelOllamaApiCreateUrlIdxPost**](#createmodelollamaapicreateurlidxpost) | **POST** /ollama/api/create/{url_idx} | Create Model|
|[**deleteModelOllamaApiDeleteDelete**](#deletemodelollamaapideletedelete) | **DELETE** /ollama/api/delete | Delete Model|
|[**deleteModelOllamaApiDeleteUrlIdxDelete**](#deletemodelollamaapideleteurlidxdelete) | **DELETE** /ollama/api/delete/{url_idx} | Delete Model|
|[**downloadModelOllamaModelsDownloadPost**](#downloadmodelollamamodelsdownloadpost) | **POST** /ollama/models/download | Download Model|
|[**downloadModelOllamaModelsDownloadUrlIdxPost**](#downloadmodelollamamodelsdownloadurlidxpost) | **POST** /ollama/models/download/{url_idx} | Download Model|
|[**embedOllamaApiEmbedPost**](#embedollamaapiembedpost) | **POST** /ollama/api/embed | Embed|
|[**embedOllamaApiEmbedUrlIdxPost**](#embedollamaapiembedurlidxpost) | **POST** /ollama/api/embed/{url_idx} | Embed|
|[**embeddingsOllamaApiEmbeddingsPost**](#embeddingsollamaapiembeddingspost) | **POST** /ollama/api/embeddings | Embeddings|
|[**embeddingsOllamaApiEmbeddingsUrlIdxPost**](#embeddingsollamaapiembeddingsurlidxpost) | **POST** /ollama/api/embeddings/{url_idx} | Embeddings|
|[**generateChatCompletionOllamaApiChatPost**](#generatechatcompletionollamaapichatpost) | **POST** /ollama/api/chat | Generate Chat Completion|
|[**generateChatCompletionOllamaApiChatUrlIdxPost**](#generatechatcompletionollamaapichaturlidxpost) | **POST** /ollama/api/chat/{url_idx} | Generate Chat Completion|
|[**generateCompletionOllamaApiGeneratePost**](#generatecompletionollamaapigeneratepost) | **POST** /ollama/api/generate | Generate Completion|
|[**generateCompletionOllamaApiGenerateUrlIdxPost**](#generatecompletionollamaapigenerateurlidxpost) | **POST** /ollama/api/generate/{url_idx} | Generate Completion|
|[**generateOpenaiChatCompletionOllamaV1ChatCompletionsPost**](#generateopenaichatcompletionollamav1chatcompletionspost) | **POST** /ollama/v1/chat/completions | Generate Openai Chat Completion|
|[**generateOpenaiChatCompletionOllamaV1ChatCompletionsUrlIdxPost**](#generateopenaichatcompletionollamav1chatcompletionsurlidxpost) | **POST** /ollama/v1/chat/completions/{url_idx} | Generate Openai Chat Completion|
|[**generateOpenaiCompletionOllamaV1CompletionsPost**](#generateopenaicompletionollamav1completionspost) | **POST** /ollama/v1/completions | Generate Openai Completion|
|[**generateOpenaiCompletionOllamaV1CompletionsUrlIdxPost**](#generateopenaicompletionollamav1completionsurlidxpost) | **POST** /ollama/v1/completions/{url_idx} | Generate Openai Completion|
|[**getConfigOllamaConfigGet**](#getconfigollamaconfigget) | **GET** /ollama/config | Get Config|
|[**getOllamaLoadedModelsOllamaApiPsGet**](#getollamaloadedmodelsollamaapipsget) | **GET** /ollama/api/ps | Get Ollama Loaded Models|
|[**getOllamaTagsOllamaApiTagsGet**](#getollamatagsollamaapitagsget) | **GET** /ollama/api/tags | Get Ollama Tags|
|[**getOllamaTagsOllamaApiTagsUrlIdxGet**](#getollamatagsollamaapitagsurlidxget) | **GET** /ollama/api/tags/{url_idx} | Get Ollama Tags|
|[**getOllamaVersionsOllamaApiVersionGet**](#getollamaversionsollamaapiversionget) | **GET** /ollama/api/version | Get Ollama Versions|
|[**getOllamaVersionsOllamaApiVersionUrlIdxGet**](#getollamaversionsollamaapiversionurlidxget) | **GET** /ollama/api/version/{url_idx} | Get Ollama Versions|
|[**getOpenaiModelsOllamaV1ModelsGet**](#getopenaimodelsollamav1modelsget) | **GET** /ollama/v1/models | Get Openai Models|
|[**getOpenaiModelsOllamaV1ModelsUrlIdxGet**](#getopenaimodelsollamav1modelsurlidxget) | **GET** /ollama/v1/models/{url_idx} | Get Openai Models|
|[**getStatusOllamaGet**](#getstatusollamaget) | **GET** /ollama/ | Get Status|
|[**getStatusOllamaHead**](#getstatusollamahead) | **HEAD** /ollama/ | Get Status|
|[**pullModelOllamaApiPullPost**](#pullmodelollamaapipullpost) | **POST** /ollama/api/pull | Pull Model|
|[**pullModelOllamaApiPullUrlIdxPost**](#pullmodelollamaapipullurlidxpost) | **POST** /ollama/api/pull/{url_idx} | Pull Model|
|[**pushModelOllamaApiPushDelete**](#pushmodelollamaapipushdelete) | **DELETE** /ollama/api/push | Push Model|
|[**pushModelOllamaApiPushUrlIdxDelete**](#pushmodelollamaapipushurlidxdelete) | **DELETE** /ollama/api/push/{url_idx} | Push Model|
|[**showModelInfoOllamaApiShowPost**](#showmodelinfoollamaapishowpost) | **POST** /ollama/api/show | Show Model Info|
|[**unloadModelOllamaApiUnloadPost**](#unloadmodelollamaapiunloadpost) | **POST** /ollama/api/unload | Unload Model|
|[**updateConfigOllamaConfigUpdatePost**](#updateconfigollamaconfigupdatepost) | **POST** /ollama/config/update | Update Config|
|[**uploadModelOllamaModelsUploadPost**](#uploadmodelollamamodelsuploadpost) | **POST** /ollama/models/upload | Upload Model|
|[**uploadModelOllamaModelsUploadUrlIdxPost**](#uploadmodelollamamodelsuploadurlidxpost) | **POST** /ollama/models/upload/{url_idx} | Upload Model|
|[**verifyConnectionOllamaVerifyPost**](#verifyconnectionollamaverifypost) | **POST** /ollama/verify | Verify Connection|

# **copyModelOllamaApiCopyPost**
> any copyModelOllamaApiCopyPost(copyModelForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    CopyModelForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let copyModelForm: CopyModelForm; //
let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.copyModelOllamaApiCopyPost(
    copyModelForm,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **copyModelForm** | **CopyModelForm**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


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

# **copyModelOllamaApiCopyUrlIdxPost**
> any copyModelOllamaApiCopyUrlIdxPost(copyModelForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    CopyModelForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let copyModelForm: CopyModelForm; //

const { status, data } = await apiInstance.copyModelOllamaApiCopyUrlIdxPost(
    urlIdx,
    copyModelForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **copyModelForm** | **CopyModelForm**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **createModelOllamaApiCreatePost**
> any createModelOllamaApiCreatePost(createModelForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    CreateModelForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let createModelForm: CreateModelForm; //
let urlIdx: number; // (optional) (default to 0)

const { status, data } = await apiInstance.createModelOllamaApiCreatePost(
    createModelForm,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createModelForm** | **CreateModelForm**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to 0|


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

# **createModelOllamaApiCreateUrlIdxPost**
> any createModelOllamaApiCreateUrlIdxPost(createModelForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    CreateModelForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let createModelForm: CreateModelForm; //

const { status, data } = await apiInstance.createModelOllamaApiCreateUrlIdxPost(
    urlIdx,
    createModelForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createModelForm** | **CreateModelForm**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **deleteModelOllamaApiDeleteDelete**
> any deleteModelOllamaApiDeleteDelete(modelNameForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    ModelNameForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let modelNameForm: ModelNameForm; //
let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteModelOllamaApiDeleteDelete(
    modelNameForm,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelNameForm** | **ModelNameForm**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


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

# **deleteModelOllamaApiDeleteUrlIdxDelete**
> any deleteModelOllamaApiDeleteUrlIdxDelete(modelNameForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    ModelNameForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let modelNameForm: ModelNameForm; //

const { status, data } = await apiInstance.deleteModelOllamaApiDeleteUrlIdxDelete(
    urlIdx,
    modelNameForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelNameForm** | **ModelNameForm**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **downloadModelOllamaModelsDownloadPost**
> any downloadModelOllamaModelsDownloadPost(urlForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    UrlForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlForm: UrlForm; //
let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.downloadModelOllamaModelsDownloadPost(
    urlForm,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **urlForm** | **UrlForm**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


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

# **downloadModelOllamaModelsDownloadUrlIdxPost**
> any downloadModelOllamaModelsDownloadUrlIdxPost(urlForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    UrlForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let urlForm: UrlForm; //

const { status, data } = await apiInstance.downloadModelOllamaModelsDownloadUrlIdxPost(
    urlIdx,
    urlForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **urlForm** | **UrlForm**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **embedOllamaApiEmbedPost**
> any embedOllamaApiEmbedPost(generateEmbedForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    GenerateEmbedForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let generateEmbedForm: GenerateEmbedForm; //
let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.embedOllamaApiEmbedPost(
    generateEmbedForm,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateEmbedForm** | **GenerateEmbedForm**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


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

# **embedOllamaApiEmbedUrlIdxPost**
> any embedOllamaApiEmbedUrlIdxPost(generateEmbedForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    GenerateEmbedForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let generateEmbedForm: GenerateEmbedForm; //

const { status, data } = await apiInstance.embedOllamaApiEmbedUrlIdxPost(
    urlIdx,
    generateEmbedForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateEmbedForm** | **GenerateEmbedForm**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **embeddingsOllamaApiEmbeddingsPost**
> any embeddingsOllamaApiEmbeddingsPost(generateEmbeddingsForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    GenerateEmbeddingsForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let generateEmbeddingsForm: GenerateEmbeddingsForm; //
let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.embeddingsOllamaApiEmbeddingsPost(
    generateEmbeddingsForm,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateEmbeddingsForm** | **GenerateEmbeddingsForm**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


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

# **embeddingsOllamaApiEmbeddingsUrlIdxPost**
> any embeddingsOllamaApiEmbeddingsUrlIdxPost(generateEmbeddingsForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    GenerateEmbeddingsForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let generateEmbeddingsForm: GenerateEmbeddingsForm; //

const { status, data } = await apiInstance.embeddingsOllamaApiEmbeddingsUrlIdxPost(
    urlIdx,
    generateEmbeddingsForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateEmbeddingsForm** | **GenerateEmbeddingsForm**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **generateChatCompletionOllamaApiChatPost**
> any generateChatCompletionOllamaApiChatPost(requestBody)


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let requestBody: { [key: string]: any; }; //
let urlIdx: number; // (optional) (default to undefined)
let bypassFilter: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.generateChatCompletionOllamaApiChatPost(
    requestBody,
    urlIdx,
    bypassFilter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|
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

# **generateChatCompletionOllamaApiChatUrlIdxPost**
> any generateChatCompletionOllamaApiChatUrlIdxPost(requestBody)


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let requestBody: { [key: string]: any; }; //
let bypassFilter: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.generateChatCompletionOllamaApiChatUrlIdxPost(
    urlIdx,
    requestBody,
    bypassFilter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|
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

# **generateCompletionOllamaApiGeneratePost**
> any generateCompletionOllamaApiGeneratePost(generateCompletionForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    GenerateCompletionForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let generateCompletionForm: GenerateCompletionForm; //
let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.generateCompletionOllamaApiGeneratePost(
    generateCompletionForm,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateCompletionForm** | **GenerateCompletionForm**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


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

# **generateCompletionOllamaApiGenerateUrlIdxPost**
> any generateCompletionOllamaApiGenerateUrlIdxPost(generateCompletionForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    GenerateCompletionForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let generateCompletionForm: GenerateCompletionForm; //

const { status, data } = await apiInstance.generateCompletionOllamaApiGenerateUrlIdxPost(
    urlIdx,
    generateCompletionForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateCompletionForm** | **GenerateCompletionForm**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **generateOpenaiChatCompletionOllamaV1ChatCompletionsPost**
> any generateOpenaiChatCompletionOllamaV1ChatCompletionsPost(requestBody)


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let requestBody: { [key: string]: any; }; //
let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.generateOpenaiChatCompletionOllamaV1ChatCompletionsPost(
    requestBody,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


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

# **generateOpenaiChatCompletionOllamaV1ChatCompletionsUrlIdxPost**
> any generateOpenaiChatCompletionOllamaV1ChatCompletionsUrlIdxPost(requestBody)


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.generateOpenaiChatCompletionOllamaV1ChatCompletionsUrlIdxPost(
    urlIdx,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **generateOpenaiCompletionOllamaV1CompletionsPost**
> any generateOpenaiCompletionOllamaV1CompletionsPost(requestBody)


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let requestBody: { [key: string]: any; }; //
let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.generateOpenaiCompletionOllamaV1CompletionsPost(
    requestBody,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


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

# **generateOpenaiCompletionOllamaV1CompletionsUrlIdxPost**
> any generateOpenaiCompletionOllamaV1CompletionsUrlIdxPost(requestBody)


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.generateOpenaiCompletionOllamaV1CompletionsUrlIdxPost(
    urlIdx,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **getConfigOllamaConfigGet**
> any getConfigOllamaConfigGet()


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

const { status, data } = await apiInstance.getConfigOllamaConfigGet();
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

# **getOllamaLoadedModelsOllamaApiPsGet**
> any getOllamaLoadedModelsOllamaApiPsGet()

List models that are currently loaded into Ollama memory, and which node they are loaded on.

### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

const { status, data } = await apiInstance.getOllamaLoadedModelsOllamaApiPsGet();
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

# **getOllamaTagsOllamaApiTagsGet**
> any getOllamaTagsOllamaApiTagsGet()


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getOllamaTagsOllamaApiTagsGet(
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

# **getOllamaTagsOllamaApiTagsUrlIdxGet**
> any getOllamaTagsOllamaApiTagsUrlIdxGet()


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)

const { status, data } = await apiInstance.getOllamaTagsOllamaApiTagsUrlIdxGet(
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

# **getOllamaVersionsOllamaApiVersionGet**
> any getOllamaVersionsOllamaApiVersionGet()


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getOllamaVersionsOllamaApiVersionGet(
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOllamaVersionsOllamaApiVersionUrlIdxGet**
> any getOllamaVersionsOllamaApiVersionUrlIdxGet()


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)

const { status, data } = await apiInstance.getOllamaVersionsOllamaApiVersionUrlIdxGet(
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOpenaiModelsOllamaV1ModelsGet**
> any getOpenaiModelsOllamaV1ModelsGet()


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getOpenaiModelsOllamaV1ModelsGet(
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

# **getOpenaiModelsOllamaV1ModelsUrlIdxGet**
> any getOpenaiModelsOllamaV1ModelsUrlIdxGet()


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)

const { status, data } = await apiInstance.getOpenaiModelsOllamaV1ModelsUrlIdxGet(
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

# **getStatusOllamaGet**
> any getStatusOllamaGet()


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

const { status, data } = await apiInstance.getStatusOllamaGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatusOllamaHead**
> any getStatusOllamaHead()


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

const { status, data } = await apiInstance.getStatusOllamaHead();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pullModelOllamaApiPullPost**
> any pullModelOllamaApiPullPost(modelNameForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    ModelNameForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let modelNameForm: ModelNameForm; //
let urlIdx: number; // (optional) (default to 0)

const { status, data } = await apiInstance.pullModelOllamaApiPullPost(
    modelNameForm,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelNameForm** | **ModelNameForm**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to 0|


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

# **pullModelOllamaApiPullUrlIdxPost**
> any pullModelOllamaApiPullUrlIdxPost(modelNameForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    ModelNameForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let modelNameForm: ModelNameForm; //

const { status, data } = await apiInstance.pullModelOllamaApiPullUrlIdxPost(
    urlIdx,
    modelNameForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelNameForm** | **ModelNameForm**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **pushModelOllamaApiPushDelete**
> any pushModelOllamaApiPushDelete(pushModelForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    PushModelForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let pushModelForm: PushModelForm; //
let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.pushModelOllamaApiPushDelete(
    pushModelForm,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pushModelForm** | **PushModelForm**|  | |
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


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

# **pushModelOllamaApiPushUrlIdxDelete**
> any pushModelOllamaApiPushUrlIdxDelete(pushModelForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    PushModelForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let pushModelForm: PushModelForm; //

const { status, data } = await apiInstance.pushModelOllamaApiPushUrlIdxDelete(
    urlIdx,
    pushModelForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pushModelForm** | **PushModelForm**|  | |
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **showModelInfoOllamaApiShowPost**
> any showModelInfoOllamaApiShowPost(modelNameForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    ModelNameForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let modelNameForm: ModelNameForm; //

const { status, data } = await apiInstance.showModelInfoOllamaApiShowPost(
    modelNameForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelNameForm** | **ModelNameForm**|  | |


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

# **unloadModelOllamaApiUnloadPost**
> any unloadModelOllamaApiUnloadPost(modelNameForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    ModelNameForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let modelNameForm: ModelNameForm; //

const { status, data } = await apiInstance.unloadModelOllamaApiUnloadPost(
    modelNameForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelNameForm** | **ModelNameForm**|  | |


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

# **updateConfigOllamaConfigUpdatePost**
> any updateConfigOllamaConfigUpdatePost(openWebuiRoutersOllamaOllamaConfigForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    OpenWebuiRoutersOllamaOllamaConfigForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let openWebuiRoutersOllamaOllamaConfigForm: OpenWebuiRoutersOllamaOllamaConfigForm; //

const { status, data } = await apiInstance.updateConfigOllamaConfigUpdatePost(
    openWebuiRoutersOllamaOllamaConfigForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **openWebuiRoutersOllamaOllamaConfigForm** | **OpenWebuiRoutersOllamaOllamaConfigForm**|  | |


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

# **uploadModelOllamaModelsUploadPost**
> any uploadModelOllamaModelsUploadPost()


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let file: File; // (default to undefined)
let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadModelOllamaModelsUploadPost(
    file,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


### Return type

**any**

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

# **uploadModelOllamaModelsUploadUrlIdxPost**
> any uploadModelOllamaModelsUploadUrlIdxPost()


### Example

```typescript
import {
    OllamaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let urlIdx: number; // (default to undefined)
let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadModelOllamaModelsUploadUrlIdxPost(
    urlIdx,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **urlIdx** | [**number**] |  | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**any**

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

# **verifyConnectionOllamaVerifyPost**
> any verifyConnectionOllamaVerifyPost(openWebuiRoutersOllamaConnectionVerificationForm)


### Example

```typescript
import {
    OllamaApi,
    Configuration,
    OpenWebuiRoutersOllamaConnectionVerificationForm
} from './api';

const configuration = new Configuration();
const apiInstance = new OllamaApi(configuration);

let openWebuiRoutersOllamaConnectionVerificationForm: OpenWebuiRoutersOllamaConnectionVerificationForm; //

const { status, data } = await apiInstance.verifyConnectionOllamaVerifyPost(
    openWebuiRoutersOllamaConnectionVerificationForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **openWebuiRoutersOllamaConnectionVerificationForm** | **OpenWebuiRoutersOllamaConnectionVerificationForm**|  | |


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


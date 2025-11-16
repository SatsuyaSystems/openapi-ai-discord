# AudioApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAudioConfigApiV1AudioConfigGet**](#getaudioconfigapiv1audioconfigget) | **GET** /api/v1/audio/config | Get Audio Config|
|[**getModelsApiV1AudioModelsGet**](#getmodelsapiv1audiomodelsget) | **GET** /api/v1/audio/models | Get Models|
|[**getVoicesApiV1AudioVoicesGet**](#getvoicesapiv1audiovoicesget) | **GET** /api/v1/audio/voices | Get Voices|
|[**speechApiV1AudioSpeechPost**](#speechapiv1audiospeechpost) | **POST** /api/v1/audio/speech | Speech|
|[**transcriptionApiV1AudioTranscriptionsPost**](#transcriptionapiv1audiotranscriptionspost) | **POST** /api/v1/audio/transcriptions | Transcription|
|[**updateAudioConfigApiV1AudioConfigUpdatePost**](#updateaudioconfigapiv1audioconfigupdatepost) | **POST** /api/v1/audio/config/update | Update Audio Config|

# **getAudioConfigApiV1AudioConfigGet**
> any getAudioConfigApiV1AudioConfigGet()


### Example

```typescript
import {
    AudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AudioApi(configuration);

const { status, data } = await apiInstance.getAudioConfigApiV1AudioConfigGet();
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

# **getModelsApiV1AudioModelsGet**
> any getModelsApiV1AudioModelsGet()


### Example

```typescript
import {
    AudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AudioApi(configuration);

const { status, data } = await apiInstance.getModelsApiV1AudioModelsGet();
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

# **getVoicesApiV1AudioVoicesGet**
> any getVoicesApiV1AudioVoicesGet()


### Example

```typescript
import {
    AudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AudioApi(configuration);

const { status, data } = await apiInstance.getVoicesApiV1AudioVoicesGet();
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

# **speechApiV1AudioSpeechPost**
> any speechApiV1AudioSpeechPost()


### Example

```typescript
import {
    AudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AudioApi(configuration);

const { status, data } = await apiInstance.speechApiV1AudioSpeechPost();
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

# **transcriptionApiV1AudioTranscriptionsPost**
> any transcriptionApiV1AudioTranscriptionsPost()


### Example

```typescript
import {
    AudioApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AudioApi(configuration);

let file: File; // (default to undefined)
let language: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.transcriptionApiV1AudioTranscriptionsPost(
    file,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **language** | [**string**] |  | (optional) defaults to undefined|


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

# **updateAudioConfigApiV1AudioConfigUpdatePost**
> any updateAudioConfigApiV1AudioConfigUpdatePost(audioConfigUpdateForm)


### Example

```typescript
import {
    AudioApi,
    Configuration,
    AudioConfigUpdateForm
} from './api';

const configuration = new Configuration();
const apiInstance = new AudioApi(configuration);

let audioConfigUpdateForm: AudioConfigUpdateForm; //

const { status, data } = await apiInstance.updateAudioConfigApiV1AudioConfigUpdatePost(
    audioConfigUpdateForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioConfigUpdateForm** | **AudioConfigUpdateForm**|  | |


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


# NotesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createNewNoteApiV1NotesCreatePost**](#createnewnoteapiv1notescreatepost) | **POST** /api/v1/notes/create | Create New Note|
|[**deleteNoteByIdApiV1NotesIdDeleteDelete**](#deletenotebyidapiv1notesiddeletedelete) | **DELETE** /api/v1/notes/{id}/delete | Delete Note By Id|
|[**getNoteByIdApiV1NotesIdGet**](#getnotebyidapiv1notesidget) | **GET** /api/v1/notes/{id} | Get Note By Id|
|[**getNoteListApiV1NotesListGet**](#getnotelistapiv1noteslistget) | **GET** /api/v1/notes/list | Get Note List|
|[**getNotesApiV1NotesGet**](#getnotesapiv1notesget) | **GET** /api/v1/notes/ | Get Notes|
|[**updateNoteByIdApiV1NotesIdUpdatePost**](#updatenotebyidapiv1notesidupdatepost) | **POST** /api/v1/notes/{id}/update | Update Note By Id|

# **createNewNoteApiV1NotesCreatePost**
> NoteModel createNewNoteApiV1NotesCreatePost(noteForm)


### Example

```typescript
import {
    NotesApi,
    Configuration,
    NoteForm
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let noteForm: NoteForm; //

const { status, data } = await apiInstance.createNewNoteApiV1NotesCreatePost(
    noteForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **noteForm** | **NoteForm**|  | |


### Return type

**NoteModel**

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

# **deleteNoteByIdApiV1NotesIdDeleteDelete**
> boolean deleteNoteByIdApiV1NotesIdDeleteDelete()


### Example

```typescript
import {
    NotesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteNoteByIdApiV1NotesIdDeleteDelete(
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

# **getNoteByIdApiV1NotesIdGet**
> NoteModel getNoteByIdApiV1NotesIdGet()


### Example

```typescript
import {
    NotesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getNoteByIdApiV1NotesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**NoteModel**

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

# **getNoteListApiV1NotesListGet**
> Array<NoteTitleIdResponse> getNoteListApiV1NotesListGet()


### Example

```typescript
import {
    NotesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let page: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getNoteListApiV1NotesListGet(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<NoteTitleIdResponse>**

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

# **getNotesApiV1NotesGet**
> Array<NoteUserResponse> getNotesApiV1NotesGet()


### Example

```typescript
import {
    NotesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

const { status, data } = await apiInstance.getNotesApiV1NotesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<NoteUserResponse>**

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

# **updateNoteByIdApiV1NotesIdUpdatePost**
> NoteModel updateNoteByIdApiV1NotesIdUpdatePost(noteForm)


### Example

```typescript
import {
    NotesApi,
    Configuration,
    NoteForm
} from './api';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let id: string; // (default to undefined)
let noteForm: NoteForm; //

const { status, data } = await apiInstance.updateNoteByIdApiV1NotesIdUpdatePost(
    id,
    noteForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **noteForm** | **NoteForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**NoteModel**

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


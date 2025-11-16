# GroupsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addUserToGroupApiV1GroupsIdIdUsersAddPost**](#addusertogroupapiv1groupsididusersaddpost) | **POST** /api/v1/groups/id/{id}/users/add | Add User To Group|
|[**createNewGroupApiV1GroupsCreatePost**](#createnewgroupapiv1groupscreatepost) | **POST** /api/v1/groups/create | Create New Group|
|[**deleteGroupByIdApiV1GroupsIdIdDeleteDelete**](#deletegroupbyidapiv1groupsididdeletedelete) | **DELETE** /api/v1/groups/id/{id}/delete | Delete Group By Id|
|[**getGroupByIdApiV1GroupsIdIdGet**](#getgroupbyidapiv1groupsididget) | **GET** /api/v1/groups/id/{id} | Get Group By Id|
|[**getGroupsApiV1GroupsGet**](#getgroupsapiv1groupsget) | **GET** /api/v1/groups/ | Get Groups|
|[**removeUsersFromGroupApiV1GroupsIdIdUsersRemovePost**](#removeusersfromgroupapiv1groupsididusersremovepost) | **POST** /api/v1/groups/id/{id}/users/remove | Remove Users From Group|
|[**updateGroupByIdApiV1GroupsIdIdUpdatePost**](#updategroupbyidapiv1groupsididupdatepost) | **POST** /api/v1/groups/id/{id}/update | Update Group By Id|

# **addUserToGroupApiV1GroupsIdIdUsersAddPost**
> GroupResponse addUserToGroupApiV1GroupsIdIdUsersAddPost(userIdsForm)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    UserIdsForm
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)
let userIdsForm: UserIdsForm; //

const { status, data } = await apiInstance.addUserToGroupApiV1GroupsIdIdUsersAddPost(
    id,
    userIdsForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdsForm** | **UserIdsForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GroupResponse**

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

# **createNewGroupApiV1GroupsCreatePost**
> GroupResponse createNewGroupApiV1GroupsCreatePost(groupForm)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    GroupForm
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupForm: GroupForm; //

const { status, data } = await apiInstance.createNewGroupApiV1GroupsCreatePost(
    groupForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupForm** | **GroupForm**|  | |


### Return type

**GroupResponse**

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

# **deleteGroupByIdApiV1GroupsIdIdDeleteDelete**
> boolean deleteGroupByIdApiV1GroupsIdIdDeleteDelete()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteGroupByIdApiV1GroupsIdIdDeleteDelete(
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

# **getGroupByIdApiV1GroupsIdIdGet**
> GroupResponse getGroupByIdApiV1GroupsIdIdGet()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getGroupByIdApiV1GroupsIdIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GroupResponse**

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

# **getGroupsApiV1GroupsGet**
> Array<GroupResponse> getGroupsApiV1GroupsGet()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

const { status, data } = await apiInstance.getGroupsApiV1GroupsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GroupResponse>**

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

# **removeUsersFromGroupApiV1GroupsIdIdUsersRemovePost**
> GroupResponse removeUsersFromGroupApiV1GroupsIdIdUsersRemovePost(userIdsForm)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    UserIdsForm
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)
let userIdsForm: UserIdsForm; //

const { status, data } = await apiInstance.removeUsersFromGroupApiV1GroupsIdIdUsersRemovePost(
    id,
    userIdsForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdsForm** | **UserIdsForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GroupResponse**

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

# **updateGroupByIdApiV1GroupsIdIdUpdatePost**
> GroupResponse updateGroupByIdApiV1GroupsIdIdUpdatePost(groupUpdateForm)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    GroupUpdateForm
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)
let groupUpdateForm: GroupUpdateForm; //

const { status, data } = await apiInstance.updateGroupByIdApiV1GroupsIdIdUpdatePost(
    id,
    groupUpdateForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupUpdateForm** | **GroupUpdateForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GroupResponse**

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


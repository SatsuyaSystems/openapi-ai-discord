# AuthsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addUserApiV1AuthsAddPost**](#adduserapiv1authsaddpost) | **POST** /api/v1/auths/add | Add User|
|[**deleteApiKeyApiV1AuthsApiKeyDelete**](#deleteapikeyapiv1authsapikeydelete) | **DELETE** /api/v1/auths/api_key | Delete Api Key|
|[**generateApiKeyApiV1AuthsApiKeyPost**](#generateapikeyapiv1authsapikeypost) | **POST** /api/v1/auths/api_key | Generate Api Key|
|[**getAdminConfigApiV1AuthsAdminConfigGet**](#getadminconfigapiv1authsadminconfigget) | **GET** /api/v1/auths/admin/config | Get Admin Config|
|[**getAdminDetailsApiV1AuthsAdminDetailsGet**](#getadmindetailsapiv1authsadmindetailsget) | **GET** /api/v1/auths/admin/details | Get Admin Details|
|[**getApiKeyApiV1AuthsApiKeyGet**](#getapikeyapiv1authsapikeyget) | **GET** /api/v1/auths/api_key | Get Api Key|
|[**getLdapConfigApiV1AuthsAdminConfigLdapGet**](#getldapconfigapiv1authsadminconfigldapget) | **GET** /api/v1/auths/admin/config/ldap | Get Ldap Config|
|[**getLdapServerApiV1AuthsAdminConfigLdapServerGet**](#getldapserverapiv1authsadminconfigldapserverget) | **GET** /api/v1/auths/admin/config/ldap/server | Get Ldap Server|
|[**getSessionUserApiV1AuthsGet**](#getsessionuserapiv1authsget) | **GET** /api/v1/auths/ | Get Session User|
|[**ldapAuthApiV1AuthsLdapPost**](#ldapauthapiv1authsldappost) | **POST** /api/v1/auths/ldap | Ldap Auth|
|[**signinApiV1AuthsSigninPost**](#signinapiv1authssigninpost) | **POST** /api/v1/auths/signin | Signin|
|[**signoutApiV1AuthsSignoutGet**](#signoutapiv1authssignoutget) | **GET** /api/v1/auths/signout | Signout|
|[**signupApiV1AuthsSignupPost**](#signupapiv1authssignuppost) | **POST** /api/v1/auths/signup | Signup|
|[**updateAdminConfigApiV1AuthsAdminConfigPost**](#updateadminconfigapiv1authsadminconfigpost) | **POST** /api/v1/auths/admin/config | Update Admin Config|
|[**updateLdapConfigApiV1AuthsAdminConfigLdapPost**](#updateldapconfigapiv1authsadminconfigldappost) | **POST** /api/v1/auths/admin/config/ldap | Update Ldap Config|
|[**updateLdapServerApiV1AuthsAdminConfigLdapServerPost**](#updateldapserverapiv1authsadminconfigldapserverpost) | **POST** /api/v1/auths/admin/config/ldap/server | Update Ldap Server|
|[**updatePasswordApiV1AuthsUpdatePasswordPost**](#updatepasswordapiv1authsupdatepasswordpost) | **POST** /api/v1/auths/update/password | Update Password|
|[**updateProfileApiV1AuthsUpdateProfilePost**](#updateprofileapiv1authsupdateprofilepost) | **POST** /api/v1/auths/update/profile | Update Profile|

# **addUserApiV1AuthsAddPost**
> SigninResponse addUserApiV1AuthsAddPost(addUserForm)


### Example

```typescript
import {
    AuthsApi,
    Configuration,
    AddUserForm
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

let addUserForm: AddUserForm; //

const { status, data } = await apiInstance.addUserApiV1AuthsAddPost(
    addUserForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addUserForm** | **AddUserForm**|  | |


### Return type

**SigninResponse**

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

# **deleteApiKeyApiV1AuthsApiKeyDelete**
> boolean deleteApiKeyApiV1AuthsApiKeyDelete()


### Example

```typescript
import {
    AuthsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

const { status, data } = await apiInstance.deleteApiKeyApiV1AuthsApiKeyDelete();
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

# **generateApiKeyApiV1AuthsApiKeyPost**
> ApiKey generateApiKeyApiV1AuthsApiKeyPost()


### Example

```typescript
import {
    AuthsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

const { status, data } = await apiInstance.generateApiKeyApiV1AuthsApiKeyPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiKey**

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

# **getAdminConfigApiV1AuthsAdminConfigGet**
> any getAdminConfigApiV1AuthsAdminConfigGet()


### Example

```typescript
import {
    AuthsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

const { status, data } = await apiInstance.getAdminConfigApiV1AuthsAdminConfigGet();
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

# **getAdminDetailsApiV1AuthsAdminDetailsGet**
> any getAdminDetailsApiV1AuthsAdminDetailsGet()


### Example

```typescript
import {
    AuthsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

const { status, data } = await apiInstance.getAdminDetailsApiV1AuthsAdminDetailsGet();
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

# **getApiKeyApiV1AuthsApiKeyGet**
> ApiKey getApiKeyApiV1AuthsApiKeyGet()


### Example

```typescript
import {
    AuthsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

const { status, data } = await apiInstance.getApiKeyApiV1AuthsApiKeyGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiKey**

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

# **getLdapConfigApiV1AuthsAdminConfigLdapGet**
> any getLdapConfigApiV1AuthsAdminConfigLdapGet()


### Example

```typescript
import {
    AuthsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

const { status, data } = await apiInstance.getLdapConfigApiV1AuthsAdminConfigLdapGet();
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

# **getLdapServerApiV1AuthsAdminConfigLdapServerGet**
> LdapServerConfig getLdapServerApiV1AuthsAdminConfigLdapServerGet()


### Example

```typescript
import {
    AuthsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

const { status, data } = await apiInstance.getLdapServerApiV1AuthsAdminConfigLdapServerGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**LdapServerConfig**

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

# **getSessionUserApiV1AuthsGet**
> SessionUserInfoResponse getSessionUserApiV1AuthsGet()


### Example

```typescript
import {
    AuthsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

const { status, data } = await apiInstance.getSessionUserApiV1AuthsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SessionUserInfoResponse**

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

# **ldapAuthApiV1AuthsLdapPost**
> SessionUserResponse ldapAuthApiV1AuthsLdapPost(ldapForm)


### Example

```typescript
import {
    AuthsApi,
    Configuration,
    LdapForm
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

let ldapForm: LdapForm; //

const { status, data } = await apiInstance.ldapAuthApiV1AuthsLdapPost(
    ldapForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ldapForm** | **LdapForm**|  | |


### Return type

**SessionUserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signinApiV1AuthsSigninPost**
> SessionUserResponse signinApiV1AuthsSigninPost(signinForm)


### Example

```typescript
import {
    AuthsApi,
    Configuration,
    SigninForm
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

let signinForm: SigninForm; //

const { status, data } = await apiInstance.signinApiV1AuthsSigninPost(
    signinForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signinForm** | **SigninForm**|  | |


### Return type

**SessionUserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signoutApiV1AuthsSignoutGet**
> any signoutApiV1AuthsSignoutGet()


### Example

```typescript
import {
    AuthsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

const { status, data } = await apiInstance.signoutApiV1AuthsSignoutGet();
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

# **signupApiV1AuthsSignupPost**
> SessionUserResponse signupApiV1AuthsSignupPost(signupForm)


### Example

```typescript
import {
    AuthsApi,
    Configuration,
    SignupForm
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

let signupForm: SignupForm; //

const { status, data } = await apiInstance.signupApiV1AuthsSignupPost(
    signupForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signupForm** | **SignupForm**|  | |


### Return type

**SessionUserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAdminConfigApiV1AuthsAdminConfigPost**
> any updateAdminConfigApiV1AuthsAdminConfigPost(adminConfig)


### Example

```typescript
import {
    AuthsApi,
    Configuration,
    AdminConfig
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

let adminConfig: AdminConfig; //

const { status, data } = await apiInstance.updateAdminConfigApiV1AuthsAdminConfigPost(
    adminConfig
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminConfig** | **AdminConfig**|  | |


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

# **updateLdapConfigApiV1AuthsAdminConfigLdapPost**
> any updateLdapConfigApiV1AuthsAdminConfigLdapPost(ldapConfigForm)


### Example

```typescript
import {
    AuthsApi,
    Configuration,
    LdapConfigForm
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

let ldapConfigForm: LdapConfigForm; //

const { status, data } = await apiInstance.updateLdapConfigApiV1AuthsAdminConfigLdapPost(
    ldapConfigForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ldapConfigForm** | **LdapConfigForm**|  | |


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

# **updateLdapServerApiV1AuthsAdminConfigLdapServerPost**
> any updateLdapServerApiV1AuthsAdminConfigLdapServerPost(ldapServerConfig)


### Example

```typescript
import {
    AuthsApi,
    Configuration,
    LdapServerConfig
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

let ldapServerConfig: LdapServerConfig; //

const { status, data } = await apiInstance.updateLdapServerApiV1AuthsAdminConfigLdapServerPost(
    ldapServerConfig
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ldapServerConfig** | **LdapServerConfig**|  | |


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

# **updatePasswordApiV1AuthsUpdatePasswordPost**
> boolean updatePasswordApiV1AuthsUpdatePasswordPost(updatePasswordForm)


### Example

```typescript
import {
    AuthsApi,
    Configuration,
    UpdatePasswordForm
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

let updatePasswordForm: UpdatePasswordForm; //

const { status, data } = await apiInstance.updatePasswordApiV1AuthsUpdatePasswordPost(
    updatePasswordForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePasswordForm** | **UpdatePasswordForm**|  | |


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

# **updateProfileApiV1AuthsUpdateProfilePost**
> OpenWebuiModelsAuthsUserResponse updateProfileApiV1AuthsUpdateProfilePost(updateProfileForm)


### Example

```typescript
import {
    AuthsApi,
    Configuration,
    UpdateProfileForm
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthsApi(configuration);

let updateProfileForm: UpdateProfileForm; //

const { status, data } = await apiInstance.updateProfileApiV1AuthsUpdateProfilePost(
    updateProfileForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProfileForm** | **UpdateProfileForm**|  | |


### Return type

**OpenWebuiModelsAuthsUserResponse**

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


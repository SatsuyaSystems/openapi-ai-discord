# EmbeddingModelUpdateForm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**openai_config** | [**OpenWebuiRoutersRetrievalOpenAIConfigForm**](OpenWebuiRoutersRetrievalOpenAIConfigForm.md) |  | [optional] [default to undefined]
**ollama_config** | [**OpenWebuiRoutersRetrievalOllamaConfigForm**](OpenWebuiRoutersRetrievalOllamaConfigForm.md) |  | [optional] [default to undefined]
**azure_openai_config** | [**AzureOpenAIConfigForm**](AzureOpenAIConfigForm.md) |  | [optional] [default to undefined]
**embedding_engine** | **string** |  | [default to undefined]
**embedding_model** | **string** |  | [default to undefined]
**embedding_batch_size** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { EmbeddingModelUpdateForm } from './api';

const instance: EmbeddingModelUpdateForm = {
    openai_config,
    ollama_config,
    azure_openai_config,
    embedding_engine,
    embedding_model,
    embedding_batch_size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# Sidecar Implementation for Compliance Frameworks

## Overview
A Tauri sidecar could efficiently serve compliance frameworks data while keeping the main application lightweight.

## Implementation Options

### Rust Sidecar
- Leverage Tauri's native Rust support
- Create a plugin structure in `src-tauri/plugins/compliance-engine/`
- Move frameworks from `tools/frameworks/` to `src-tauri/plugins/compliance-engine/frameworks/`
- Expose endpoints like `get_framework`, `get_controls`, `get_mappings`

### Go Sidecar
- Benefits:
  - Runtime efficiency
  - Easier concurrency for parallel framework processing
  - Good standard library for file I/O and API creation
- Structure:
  - Separate binary in `compliance-engine/` directory
  - API endpoints matching Rust implementation
  - JSON-based communication protocol

## Suggested Directory Restructuring
- Rename `tools/frameworks/` to `compliance-data/`
- Organize by `compliance-data/{framework-id}/{version}/`
- Add tooling in `compliance-engine/` for validation and processing

## API Design
```typescript
interface ComplianceEngine {
  // Framework management
  getFrameworks(): Promise<Framework[]>;
  getFramework(id: string, version: string): Promise<Framework>;
  
  // Control operations
  getControls(frameworkId: string, version: string): Promise<Control[]>;
  getControl(frameworkId: string, version: string, controlId: string): Promise<Control>;
  
  // Mapping operations
  getMappings(frameworkId: string, version: string): Promise<Mapping[]>;
  
  // Evidence management
  storeEvidence(controlId: string, evidence: Evidence): Promise<void>;
  getEvidence(controlId: string): Promise<Evidence[]>;
}
```
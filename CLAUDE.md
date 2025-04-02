# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build, Lint, and Test Commands
- Build frontend: `pnpm build` or `npm run build`
- Run dev server: `pnpm dev` or `npm run dev`
- Run Tauri app: `pnpm tauri dev` or `npm run tauri dev`
- Build Tauri app: `pnpm tauri build` or `npm run tauri build`
- TypeScript typecheck: `tsc --noEmit`
- Rust check: `cargo check --manifest-path=src-tauri/Cargo.toml`
- Rust tests: `cargo test --manifest-path=src-tauri/Cargo.toml`

## Code Style Guidelines
- **TypeScript**: Use strict typing. Avoid `any`. Use interfaces for object types.
- **Formatting**: 2-space indentation for TypeScript, 4-space for Rust.
- **Imports**: Group imports by source (third-party, then project). Sort alphabetically.
- **Naming**: Use camelCase for TypeScript variables/functions, PascalCase for classes/interfaces, snake_case for Rust.
- **Error Handling**: Use Result<T, E> pattern in Rust. TypeScript should use try/catch where appropriate.
- **File Structure**: Keep related components together. Frontend code in `/src`, Rust in `/src-tauri/src`.
- **Documentation**: Document public functions/types. Use JSDoc for TypeScript and /// for Rust.
# Fully-Compliant: A Tauri-Based Compliance Tool

Fully-Compliant is a compliance tool built with Tauri, combining the power of Rust for the backend and TypeScript with Vite for the frontend. It is designed to help organizations adhere to compliance frameworks such as CIS, CMMC, and NIST.

## Key Features

- **Framework**: Tauri (Rust + Web technologies)
- **Frontend**: TypeScript with Vite
- **Backend**: Rust
- **Compliance Frameworks**: Support for CIS, CMMC, and NIST

## Project Structure

- `src-tauri`: Rust backend
- `src`: TypeScript frontend
- `tools/frameworks`: Compliance frameworks

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
  - [Tauri Extension](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
  - [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Build, Lint, and Test Commands

### Frontend
- Build: `pnpm build` or `npm run build`
- Dev server: `pnpm dev` or `npm run dev`

### Tauri App
- Run: `pnpm tauri dev` or `npm run tauri dev`
- Build: `pnpm tauri build` or `npm run tauri build`

### TypeScript
- Typecheck: `tsc --noEmit`

### Rust
- Check: `cargo check --manifest-path=src-tauri/Cargo.toml`
- Test: `cargo test --manifest-path=src-tauri/Cargo.toml`

## Code Style Guidelines

- **TypeScript**: Use strict typing. Avoid `any`. Use interfaces for object types.
- **Rust**: Follow the `Result<T, E>` pattern for error handling.
- **Formatting**: 2-space indentation for TypeScript, 4-space for Rust.
- **Imports**: Group imports by source and sort alphabetically.
- **Naming**: Use camelCase for TypeScript variables/functions, PascalCase for classes/interfaces, and snake_case for Rust.
- **Documentation**: Use JSDoc for TypeScript and `///` for Rust.

## Dependencies

- [Tauri](https://tauri.app/) and plugins
- [Vite](https://vitejs.dev/) for frontend bundling
- [TypeScript](https://www.typescriptlang.org/)

## Contributing

Contributions are welcome! Please follow the code style guidelines and ensure all tests pass before submitting a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

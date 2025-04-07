#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hey, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn is_first_run() -> bool {
    use std::env;
    use std::fs;
    use std::path::PathBuf;

    // Using a simple approach with app local data directory
    let app_data_dir = match env::var("HOME") {
        Ok(home) => PathBuf::from(home).join(".config").join("fully-compliant"),
        Err(_) => {
            // Fallback to temporary directory if HOME is not available
            env::temp_dir().join("fully-compliant")
        }
    };

    let first_run_marker = app_data_dir.join("first_run.marker");

    if !first_run_marker.exists() {
        // Create directories if they don't exist
        let _ = fs::create_dir_all(&app_data_dir);
        // Create the marker file
        let _ = fs::write(&first_run_marker, "");
        true
    } else {
        false
    }
}

#[tauri::command]
fn show_federal_warning() -> String {
    "WARNING: This is a federal computer system and is the property of the United States Government. It is for authorized use only. Users have no explicit or implicit expectation of privacy. Any or all uses of this system may be subject to one or more of the following: monitoring, recording, copying, auditing, and inspection. By using this system, the user consents to such interception, monitoring, recording, copying, auditing, inspection, and disclosure at the discretion of authorized site or United States Government personnel. Unauthorized or improper use of this system may result in administrative disciplinary action and civil and criminal penalties.".to_string()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            is_first_run,
            show_federal_warning
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

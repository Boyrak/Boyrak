<?php
// genPlist.php
// Helper script for PU.Sign Semi-Local installation

// Set headers to serve XML
header('Content-Type: application/xml');

// Get parameters
$bundleId = $_GET['bundleid'] ?? 'com.example.app';
$name = $_GET['name'] ?? 'App Name';
$version = $_GET['version'] ?? '1.0';
$fetchUrl = $_GET['fetchurl'] ?? '';

// Basic validation
if (empty($fetchUrl)) {
    die('<error>Missing fetchurl parameter</error>');
}

// Generate the Plist
echo '<?xml version="1.0" encoding="UTF-8"?>';
?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>items</key>
    <array>
        <dict>
            <key>assets</key>
            <array>
                <dict>
                    <key>kind</key>
                    <string>software-package</string>
                    <key>url</key>
                    <string><?php echo htmlspecialchars($fetchUrl); ?></string>
                </dict>
            </array>
            <key>metadata</key>
            <dict>
                <key>bundle-identifier</key>
                <string><?php echo htmlspecialchars($bundleId); ?></string>
                <key>bundle-version</key>
                <string><?php echo htmlspecialchars($version); ?></string>
                <key>kind</key>
                <string>software</string>
                <key>title</key>
                <string><?php echo htmlspecialchars($name); ?></string>
            </dict>
        </dict>
    </array>
</dict>
</plist>

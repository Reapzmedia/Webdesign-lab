# Skylos Static Code & Design Audit Script
param(
    [string]$Path = "."
)

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "   SKYLOS STATIC CODE & ACCESSIBILITY AUDIT        " -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

$htmlFiles = Get-ChildItem -Path $Path -Include *.html -Recurse -File
$cssFiles  = Get-ChildItem -Path $Path -Include *.css -Recurse -File -Exclude *min*
$jsFiles   = Get-ChildItem -Path $Path -Include *.js -Recurse -File -Exclude *min*

Write-Host "Discovered:" -ForegroundColor Yellow
Write-Host " - HTML Files: $($htmlFiles.Count)"
Write-Host " - CSS Files:  $($cssFiles.Count)"
Write-Host " - JS Files:   $($jsFiles.Count)"
Write-Host ""

$issues = @()

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    if ($content -notmatch '<!DOCTYPE html>') {
        $issues += [PSCustomObject]@{ File = $file.Name; Severity = "High"; Issue = "Missing standard <!DOCTYPE html> declaration" }
    }
    if ($content -notmatch 'name=["'']viewport["'']') {
        $issues += [PSCustomObject]@{ File = $file.Name; Severity = "High"; Issue = "Missing meta viewport tag for mobile responsiveness" }
    }
    if ($content -notmatch '<html[^>]+lang=') {
        $issues += [PSCustomObject]@{ File = $file.Name; Severity = "Medium"; Issue = "Missing lang attribute on <html> element" }
    }
    if ($content -notmatch '<title>[^<]+</title>') {
        $issues += [PSCustomObject]@{ File = $file.Name; Severity = "High"; Issue = "Missing or empty <title> tag" }
    }
    if ($content -notmatch 'name=["'']description["'']') {
        $issues += [PSCustomObject]@{ File = $file.Name; Severity = "Medium"; Issue = "Missing meta description for SEO" }
    }
    $h1Matches = [regex]::Matches($content, '<h1[\s>]')
    if ($h1Matches.Count -eq 0) {
        $issues += [PSCustomObject]@{ File = $file.Name; Severity = "Medium"; Issue = "No <h1> element found" }
    } elseif ($h1Matches.Count -gt 1) {
        $issues += [PSCustomObject]@{ File = $file.Name; Severity = "Low"; Issue = "Multiple <h1> elements found ($($h1Matches.Count)). Standard is exactly one per page." }
    }
}

if ($issues.Count -eq 0) {
    Write-Host "[PASS] Audit Passed: No static issues or accessibility violations found!" -ForegroundColor Green
} else {
    Write-Host "[WARN] Found $($issues.Count) issue(s):" -ForegroundColor Yellow
    $issues | Format-Table -AutoSize
}
Write-Host ""
Write-Host "Audit completed successfully." -ForegroundColor Cyan

@echo off
set "PATH=%~dp0.tools\nodejs;%PATH%"
"%~dp0node_modules\.bin\playwright.cmd" %*

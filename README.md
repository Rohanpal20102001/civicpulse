# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.


(.venv) rohanpal@CKMAC190 civicpulse % git diff --cached
diff --git a/.gitignore b/.gitignore
index 6f596e1..f58544f 100644
--- a/.gitignore
+++ b/.gitignore
@@ -3,9 +3,16 @@ __pycache__/
 *.py[codz]
 *$py.class
 
+# Node
+node_modules/
+dist/
+build/
+
 # C extensions
 *.so
 
+.DS_STORE
+
 # Distribution / packaging
 .Python
 build/
@@ -149,15 +156,33 @@ activemq-data/
 # SageMath parsed files
 *.sage.py
 
-# Environments
+# Environment files across the entire monorepo
+**/.env
+**/.env.*
+!**/.env.example
+

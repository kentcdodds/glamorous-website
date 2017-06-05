aliasDeployment() {
  echo "now alias set $NOW_ID $1glamorous.rocks --token NOW_TOKEN"
  now alias set $NOW_ID $1glamorous.rocks --token $NOW_TOKEN
}
aliasDeployment rc.
aliasDeployment en.rc.
aliasDeployment es.rc.
aliasDeployment fr.rc.

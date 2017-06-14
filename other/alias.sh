set -e # stop on first error

aliasDeployment() {
  echo "now alias set $NOW_ID $1$NOW_ALIAS --token NOW_TOKEN"
  now alias set $NOW_ID $1$NOW_ALIAS --token $NOW_TOKEN
}
aliasDeployment
aliasDeployment en.
aliasDeployment es.
aliasDeployment fr.

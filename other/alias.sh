set -e # stop on first error

aliasDeployment() {
  echo "now alias set $NOW_ID $1$NOW_ALIAS --token NOW_TOKEN"
  now alias set $NOW_ID $1$NOW_ALIAS --token $NOW_TOKEN
}
echo "⏰ Waiting for $NOW_ID deployment to be ready"
await-url $NOW_ID
echo "🤘 $NOW_ID is ready, beginning the alias"
aliasDeployment
aliasDeployment en.
aliasDeployment es.
aliasDeployment fr.
echo "🎊 Aliasing is finished!"

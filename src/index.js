import * as $ from 'jquery'
import Post from './Post'
import './css/main.css'
import json from '@/assets/json.json'
import Weblogo from '@/assets/logo.png'
import './css/less.less'

const post = new Post('Webpack post title', Weblogo)
console.log(post.showTitle())

console.log(json)

console.log(Weblogo)

$('pre').html("from JQ")
<template>
    <div class="hello">
        <h1>Sass、Lodash测试</h1>
        {{length}}
    </div>
</template>
<script>
import _ from 'lodash'
export default {
    data() {
        return {
            length:0
        }
    },
    mounted: function() {
        var users = [{
            'user': 'barney',
            'age': 36
        }, {
            'user': 'fred',
            'age': 40
        }, {
            'user': 'pebbles',
            'age': 18
        }];

        if (_.size(users)) {
            this.length="users length：" + _.size(users);
        };

        var names = _.chain(users)
            .map(function(user) {
                return user.user;
            })
            .join(" , ")
            .value();
        console.log(names);
        console.log(_.first(users));

        _([1, 2]).forEach(function(n) {
            console.log(n);
        });

        _.forEach({
            'a': 1,
            'b': 2
        }, function(n, key) {
            console.log(n, key);
        });
    }
}
</script>
<style lang="scss" scoped>
$color:red;
h1 {
    color: $color;
}
</style>

<template lang="pug">
  .example-container
    span {{ score }}
    v-btn(@click.native="increment(1)") add
    v-btn(@click.native="incrementAsync(1)") async add
    v-btn(@click.native="decrement(1)") substract
</template>

<script>
  import { connect } from 'vue2-redux'
  import { bindActionCreators } from 'redux'
  import { increment, decrement, incrementAsync } from 'common/actions'

  const mapStateProps = ({ example }) => ({
    score: example.score
  })

  const mapDispatchProps = dispatch => bindActionCreators({
    increment,
    decrement,
    incrementAsync
  }, dispatch)

  export default connect(
    mapStateProps,
    mapDispatchProps
  )({
    name: 'ExampleContainer'
  })
</script>


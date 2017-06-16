# putmetric
Push metrics to ContainerPilot for consumption by Prometheus.

## Usage Example

```js
const putmetric = new Putmetric({ namespace: 'myapp', subsystem: 'frontend'});

putmetric('requests', 1, (err) => {
  // handle error
});
```

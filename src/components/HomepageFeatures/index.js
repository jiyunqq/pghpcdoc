import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '用户管理',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        采用 <code>nis</code> 作为集群平台统一的用户管理.
      </>
    ),
  },
  {
    title: '调度系统',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        采用 <code>slurm</code> 调度, 预配置作业调度脚本.
      </>
    ),
  },
  {
    title: '集群管理',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        采用 <code>xcat</code> 管理集群, 包括批命令, 批拷贝, 远程开关机等.
        通过 <code>environment-modules</code> 管理环境变量.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

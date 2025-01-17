import { ReactNode } from 'react';

import { KubernetesApplicationPublishingTypes } from '@/kubernetes/models/application/models';

export interface ServicePort {
  port?: number;
  targetPort?: number;
  nodePort?: number;
  serviceName?: string;
  name?: string;
  protocol?: string;
  ingress?: object;
}

export type ServiceTypeAngularEnum =
  (typeof KubernetesApplicationPublishingTypes)[keyof typeof KubernetesApplicationPublishingTypes];

export type ServiceFormValues = {
  Headless: boolean;
  Ports: ServicePort[];
  Type: ServiceTypeAngularEnum;
  Ingress: boolean;
  ClusterIP?: string;
  ApplicationName?: string;
  ApplicationOwner?: string;
  Note?: string;
  Name?: string;
  StackName?: string;
  Selector?: Record<string, string>;
  Namespace?: string;
};

export type ServiceTypeValue = 'ClusterIP' | 'NodePort' | 'LoadBalancer';
export type ServiceTypeOption = {
  value: ServiceTypeValue;
  label: ReactNode;
};

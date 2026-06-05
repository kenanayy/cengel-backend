// Kodun üstüne @Roles("admin") yazarak o rotayı sadece yöneticilere özel yapmamızı sağlayan pratik koddur.

import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
